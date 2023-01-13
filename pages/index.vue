<script>
export default {
  components: {
    HeaderElement: () => import("@/components/HeaderElement"),
    OffCanvasMobileMenu: () => import("@/components/OffCanvasMobileMenu"),
    SearchPopup: () => import("@/components/SearchPopup"),
    FooterTwo: () => import("@/components/FooterTwo"),
  },
  data() {
    return {
      navOpen: false,
      searchOpen: false,
      doctors: [],
      selectedDoctor: null,
      date: null,
      complaint: null,
      schedules: [],
      getDate: null,
      selectedSchedule: null,
      isModalReservationActive: false,
      isBusy: true,
      reservation: {
        doctorId: null,
        patientId: null,
        scheduleId: null,
        arrivalPlan: null,
        arrival: null,
        patientComplaint: null,
        fullName: null,
        phoneNumber: null,
      },
    };
  },
  methods: {
    switchSchedule() {
      this.schedules = [];
      if (this.date !== null) {
        this.reservation.arrivalPlan = this.date;
        this.doctors.map((el) => {
          if (el.id === this.selectedDoctor) {
            el.schedules.map((s) => {
              if (s.day === parseInt(new Date(this.date).getDay())) {
                this.schedules.push(s);
              }
            });
          }
        });
      }
    },
    async submit() {
      this.isBusy = true;
      let url = "/api/book-orders";

      try {
        const resp = await this.$axios.post(url, this.reservation);
        if (resp.data) {
          console.log(resp.data.data);
          this.isModalReservationActive = false;
        }
      } catch (error) {
        console.log(error);
      }
      // console.log(this.doctors);
      this.isBusy = false;
    },
  },
  async fetch() {
    this.isBusy = true;
    let url = "/api/doctors?withProfile=true&withSchedules=true";
    this.doctors = [];

    try {
      const resp = await this.$axios.get(url);
      if (resp.data) {
        this.doctors = resp.data.data;
      }
    } catch (error) {
      console.log(error);
    }
    // console.log(this.doctors);
    this.isBusy = false;
  },
  mounted() {
    document.body.classList.add("template-color-41", "template-font-3");
    // this.selectedDoctor = null;
  },
  watch: {
    date: {
      handler: function () {
        this.switchSchedule();
      },
    },
    selectedDoctor: {
      handler: function () {
        this.switchSchedule();
        if (this.selectedDoctor !== null) {
          this.reservation.doctorId = parseInt(this.selectedDoctor);
        }
      },
    },
    selectedSchedule: {
      handler: function () {
        if (this.selectedSchedule !== null) {
          this.reservation.scheduleId = parseInt(this.selectedSchedule);
        }
      },
    },
  },
  head() {
    return {
      title: "Hanum Dental Care Majenang",
    };
  },
};
</script>

<template>
  <div class="main-container">
    <!-- Using value -->

    <!-- The modal -->
    <b-modal v-model="isModalReservationActive" hide-header>
      <b-form @submit.prevent="submit" id="reservation-form">
        <!-- <b-form @submit="onSubmit" @reset="onReset" v-if="show"> -->
        <b-form-group label="Nama Pasien" label-for="fullName">
          <b-form-input
            v-model="reservation.fullName"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Nomor Telepon Pasien" label-for="phone">
          <b-form-input
            v-model="reservation.phoneNumber"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Dokter" label-for="doctor">
          <select v-model="selectedDoctor" class="form-control" required>
            <option :value="el.id" v-for="el in doctors" :key="el.id">
              {{
                el.user?.profile?.fullName ? el.user?.profile?.fullName : "-"
              }}
            </option>
          </select>
        </b-form-group>
        <b-form-group label="Tanggal Kunjungan" label-for="date">
          <b-form-datepicker
            :disabled="selectedDoctor === null"
            v-model="date"
            locale="id"
            class="mb-2"
          ></b-form-datepicker>
        </b-form-group>
        <b-form-group label="Jam Kunjungan" label-for="schedule">
          <select
            :disabled="selectedDoctor === null || schedules.length === 0"
            v-model="selectedSchedule"
            class="form-control"
            required
          >
            <option :value="el.id" v-for="el in schedules" :key="el.guid">
              {{ el.time ? el.time : "-" }}
            </option>
          </select>
        </b-form-group>
        <b-form-group label="Keluhan" label-for="complaint">
          <b-form-textarea
            id="complaint"
            v-model="reservation.patientComplaint"
            placeholder="Ceritakan keluhan anda..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>
      </b-form>
      <template #modal-footer>
        <b-button
          @click="isModalReservationActive = !isModalReservationActive"
          class="brook-btn btn-rounded corona-btn space-between"
          >Batal</b-button
        >
        <b-button
          type="submit"
          form="reservation-form"
          class="brook-btn bk-btn-theme btn-rounded corona-btn space-between"
          >RESERVASI</b-button
        >
      </template>
    </b-modal>
    <!-- brook-btn bk-btn-theme btn-sd-size btn-rounded corona-btn space-between -->
    <!-- <HeaderElement
      @togglenav="navOpen = !navOpen"
      @toggleSearch="searchOpen = !searchOpen"
    /> -->

    <OffCanvasMobileMenu
      :class="{ 'show-mobile-menu': navOpen }"
      @togglenav="navOpen = !navOpen"
    />

    <SearchPopup
      :class="{ 'search-popup-open': searchOpen }"
      @toggleSearch="searchOpen = !searchOpen"
    />

    <!-- Start Hero Slider Area -->
    <div
      class="hero-item hero-item-corona"
      :style="{ backgroundImage: `url('/img/hanumdentalcare/background.jpg')` }"
    >
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="hero-content-5 left">
              <h3>
                Percayakan Kesehatan GIGI <br />
                Anda & Keluarga <br />
                Kepada Kami
              </h3>
              <p>
                Stay home, Stay sage and Stay healthy, Maintain at least 1 meter
                (3 feet) <br />
                distance between yourself and who is coughing or sneezing
              </p>
              <b-button
                @click="isModalReservationActive = !isModalReservationActive"
                class="brook-btn bk-btn-theme btn-sd-size btn-rounded corona-btn space-between"
                >Buat RESERVASI</b-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Hero Slider Area -->

    <!-- Start Contagion Area -->
    <div
      class="brook-contagion-area bg_color--1 pt--110 pt_md--80 pt_sm--60 pb--90 pb_md--55 pb_sm--30"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-12 col-sm-12 col-12">
            <div class="thumbnail wow move-up animate">
              <img src="/img/hanumdentalcare/banner-2.png" alt="multipurpose" />
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 col-12">
            <div class="contagion-content wow move-up animate">
              <!-- Section Title Start -->
              <div class="brook-section-title-corona mb--50">
                <h2>
                  Mengapa <br />
                  <span class="text-black text-underline"
                    >Hanum Dental Care?</span
                  >
                </h2>
              </div>
              <!-- Section Title End -->

              <!-- Single Contagion Start -->
              <div class="single-contagion mb--30">
                <div class="contagion-image">
                  <img src="/img/corona/contagion1.png" alt="corona" />
                </div>
                <div class="contagion-content">
                  <h3 class="title">Human Contact</h3>
                  <p>
                    Virus is spread mainly from man to man. Hands touch many
                    surfaces and pick up viruses. Once contaminated, hands can
                    transfer the virus.
                  </p>
                </div>
              </div>
              <!-- Single Contagion End -->
              <!-- Single Contagion Start -->
              <div class="single-contagion mb--30">
                <div class="contagion-image rotate-center">
                  <img src="/img/corona/contagion2.png" alt="corona" />
                </div>
                <div class="contagion-content">
                  <h3 class="title">Air Transmission</h3>
                  <p>
                    Virus may spread through airborne when tiny Droplets remain
                    in the air, so we have to use mask to prevent this virus
                    Safely and be safe as well as healthy
                  </p>
                </div>
              </div>
              <!-- Single Contagion End -->
              <!-- Single Contagion Start -->
              <div class="single-contagion mb--30">
                <div class="contagion-image">
                  <img src="/img/corona/contagion3.png" alt="corona" />
                </div>
                <div class="contagion-content">
                  <h3 class="title">Contaminated Objects</h3>
                  <p>
                    Touching a object that has the virus. Grocery stores,
                    Restaurants, Food processing plants, even your home food
                    contamination can happen so have to careful
                  </p>
                </div>
              </div>
              <!-- Single Contagion End -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Contagion Area -->

    <!-- About Coronavirus Area Start -->
    <div
      class="about-coronvirus-area bg_image--137 pt--90 pt_md--70 pt_sm--60 pb--80 pb_md--40 pb_sm--50"
      :style="{ backgroundImage: `url('/img/hanumdentalcare/background.jpg')` }"
    >
      <div
        class="container-fluid plr--220 plr_lp--15 plr_lg--15 plr_md--15 plr_sm--15"
      >
        <div class="row align-items-center">
          <div class="col-xl-5 col-lg-6 wow move-up animate">
            <div class="about-coronavirus-content">
              <h2>Sekilas Tentang Kami</h2>
              <!-- <p class="sub-title">
                Coronavirus disease (COVID-19) is an infectious disease caused
                by a new virus, Which is began in Wuhan a city in China.
              </p> -->
              <!-- <p class="pragraph"> -->
              <p class="sub-title">
                <b>Hanum Dental Care</b> berdiri sekitar tahun 2000, yang
                beralamat di Jalan Anggrek no 26, Sindangsari, Majenang. Dokter
                yang praktek di HDC yaitu <b>drg Nor Cholifah Hanum</b> dan
                <b>drg Aninda</b>.
              </p>
              <n-link
                to="/about-us-01"
                class="brook-btn bk-btn-theme btn-sd-size btn-rounded corona-btn space-between"
                >Lainnya</n-link
              >
              <a
                class="video-btn-text play__btn ml--30 ml_sm--10 mt--0 mt_sm--20"
                href="https://www.youtube.com/watch?v=5DGwOJXSxqg"
                target="_blank"
                ><i class="fas fa-play"></i> Tentang Kami</a
              >
            </div>
          </div>
          <div class="col-xl-7 col-lg-6 wow move-up animate">
            <div class="about-image">
              <img src="/img/hanumdentalcare/middle-content.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- About Coronavirus Area Start -->

    <!-- Coronavirus Symptom Area Start -->
    <div
      class="coronavirus-symptom pt--110 pt_md--70 pt_sm--50 pb--40 pb_md--50 pb_sm--40"
    >
      <div
        class="container-fluid plr--220 plr_lp--50 plr_lg--15 plr_md--15 plr_sm--15"
      >
        <div class="row mb--70 mb_md--30 mb_sm--30">
          <div class="col-12">
            <!-- Section Title Start -->
            <div
              class="brook-section-title-corona text-center wow move-up animate"
            >
              <h2 class="fw-600">Layanan Kami</h2>
              <p>
                Hubungi kami jika anda atau keluarga
                <br />
                membutuhkan untuk:
              </p>
            </div>
            <!-- Section Title End -->
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-xl-3 col-lg-4 col-md-6 wow move-up animate">
            <!-- Single symptom Start -->
            <div class="single-symptom mb--80 mb_md--30 mb_sm--30">
              <div class="symptom-thumb">
                <img src="/img/hanumdentalcare/6.png" alt="image" />
              </div>
              <div class="symptom-content">
                <h3>Pencabutan</h3>
                <p>Pencabutan gigi</p>
              </div>
            </div>
            <!-- Single symptom End -->

            <!-- Single symptom Start -->
            <div class="single-symptom mb--80 mb_md--30 mb_sm--30">
              <div class="symptom-thumb">
                <img src="/img/hanumdentalcare/2.png" alt="image" />
              </div>
              <div class="symptom-content">
                <h3>Penambalan</h3>
                <p>Tambal gigi berlubang</p>
              </div>
            </div>
            <!-- Single symptom End -->

            <!-- Single symptom Start -->
            <div class="single-symptom mb--80 mb_md--30 mb_sm--30">
              <div class="symptom-thumb">
                <img src="/img/hanumdentalcare/7.png" alt="image" />
              </div>
              <div class="symptom-content">
                <h3>Bracket</h3>
                <p>Pemasangan Behel atau Bracket</p>
              </div>
            </div>
            <!-- Single symptom End -->

            <!-- Single symptom Start -->
            <div class="single-symptom mb--80 mb_md--30 mb_sm--30">
              <div class="symptom-thumb">
                <img src="/img/hanumdentalcare/3.png" alt="image" />
              </div>
              <div class="symptom-content">
                <h3>Perawatan Saluran Akar</h3>
                <p>
                  Perawatan Saluran Akar Gigi (PSA) adalah prosedur perawatan
                  gigi yang dilakukan saat infeksi penyebab pembusukan sudah
                  terlanjur membunuh saraf gigi.
                </p>
              </div>
            </div>
            <!-- Single symptom End -->
          </div>
          <div
            class="col-xl-6 col-lg-4 d-xl-block d-lg-block d-none wow move-up animate"
          >
            <!-- symptom Image -->
            <div class="symptom-image text-center">
              <img src="/img/hanumdentalcare/banner-3.png" alt="multipurpose" />
            </div>
            <!-- symptom Image -->
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 wow move-up animate">
            <!-- Single symptom Start -->
            <div class="single-symptom mb--80 mb_md--30 mb_sm--30">
              <div class="symptom-thumb">
                <img src="/img/hanumdentalcare/4.png" alt="image" />
              </div>
              <div class="symptom-content">
                <h3>Pembersihan</h3>
                <p>Pembersihan Karang Gigi</p>
              </div>
            </div>
            <!-- Single symptom End -->

            <!-- Single symptom Start -->
            <div class="single-symptom mb--80 mb_md--30 mb_sm--30">
              <div class="symptom-thumb">
                <img src="/img/hanumdentalcare/1.png" alt="image" />
              </div>
              <div class="symptom-content">
                <h3>Bedah Minor</h3>
                <p>Pengangkatan jaringan lunak di dalam mulut benjolan</p>
              </div>
            </div>
            <!-- Single symptom End -->

            <!-- Single symptom Start -->
            <div class="single-symptom mb--80 mb_md--30 mb_sm--30">
              <div class="symptom-thumb">
                <img src="/img/hanumdentalcare/3.png" alt="image" />
              </div>
              <div class="symptom-content">
                <h3>Pengencangan</h3>
                <p>
                  Pemasangan gigi goyang ( Pengencangan ), kawat gigi untuk post
                  KLL
                </p>
              </div>
            </div>
            <!-- Single symptom End -->

            <!-- Single symptom Start -->
            <div class="single-symptom mb--80 mb_md--30 mb_sm--30">
              <div class="symptom-thumb">
                <img src="/img/hanumdentalcare/7.png" alt="image" />
              </div>
              <div class="symptom-content">
                <h3>Gigi Palsu</h3>
                <p>Gigi Palsu Permanen dan Gigi Palsu Lepasan.</p>
              </div>
            </div>
            <!-- Single symptom End -->
            <!-- Single symptom Start -->
            <div class="single-symptom mb--80 mb_md--30 mb_sm--30">
              <div class="symptom-thumb">
                <img src="/img/hanumdentalcare/1.png" alt="image" />
              </div>
              <div class="symptom-content">
                <h3>Bleaching / Pemutihan Gigi</h3>
                <p>Bleaching / Pemutihan Gigi.</p>
              </div>
            </div>
            <!-- Single symptom End -->
          </div>
        </div>
      </div>
    </div>
    <!-- Coronavirus Symptom Area Start -->

    <FooterTwo />
  </div>
</template>

<style lang="scss" scoped>
.single-symptom {
  background: url("../static/img/corona/design.png");
  background-color: #f9f2ff;
  background-position: right;
  background-repeat: no-repeat;
}
</style>
