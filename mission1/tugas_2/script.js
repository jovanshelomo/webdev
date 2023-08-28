/*
201524037	Azis Surohman
211524033	Aini Diah Rahmawati
211524034	Aini Nurul Azizah
211524036	Amelia Nathasa
211524037	Danu Mahesa
211524038	Dea Salma Isnaini
211524039	Delvito Rahim Derivansyah
211524040	Egi Satria Dharma Yudha Wicaksana
211524041	Falia Davina Gustaman
211524042	Ghessa Theniana
211524043	Gian Sandrova
211524044	Helsa Alika Femiani
211524045	Husna Maulana
211524046	Jovan Shelomo
211524047	Mentari Ayu Alysia Sudrajat
211524048	Mey Meizia Galtiady
211524049	Mochamad Ferdy Fauzan
211524050	Muhammad Daffa Raihandika
211524051	Muhammad Rafi Farhan
211524052	Nayara Saffa
211524053	Novia Nur Azizah
211524054	Rachmat Purwa Saputra
211524055	Rahma Alia Latifa
211524056	Raka Mahardika Maulana
211524057	Regi Purnama
211524058	Reihan Hadi Fauzan
211524059	Reza Ananta Permadi Supriyo
211524060	Rivaldo Fauzan Robani
211524061	Rofa'ul Akrom Hendrawan
211524062	Sendi Setiawan
211524063	Syifa Khairina
211524064	Yasmin Azizah Tuhfah
*/

mahasiswa = [
  {
    gambar: "201524037.jpg",
    nama: "Azis Surohman",
  },
  {
    gambar: "211524033.JPG",
    nama: "Aini Diah Rahmawati",
  },
  {
    gambar: "211524034.jpg",
    nama: "Aini Nurul Azizah",
  },
  {
    gambar: "211524036.jpg",
    nama: "Amelia Nathasa",
  },
  {
    gambar: "211524037.jpg",
    nama: "Danu Mahesa",
  },
  {
    gambar: "211524038.jpg",
    nama: "Dea Salma Isnaini",
  },
  {
    gambar: "211524039.jpg",
    nama: "Delvito Rahim Derivansyah",
  },
  {
    gambar: "211524040.jpg",
    nama: "Egi Satria Dharma Yudha Wicaksana",
  },
  {
    gambar: "211524041.jpg",
    nama: "Falia Davina Gustaman",
  },
  {
    gambar: "211524042.jpg",
    nama: "Ghessa Theniana",
  },
  {
    gambar: "211524043.jpg",
    nama: "Gian Sandrova",
  },
  {
    gambar: "211524044.jpg",
    nama: "Helsa Alika Femiani",
  },
  {
    gambar: "211524045.jpg",
    nama: "Husna Maulana",
  },
  {
    gambar: "211524046.jpg",
    nama: "Jovan Shelomo",
  },
  {
    gambar: "211524047.jpg",
    nama: "Mentari Ayu Alysia Sudrajat",
  },
  {
    gambar: "211524048.jpg",
    nama: "Mey Meizia Galtiady",
  },
  {
    gambar: "211524049.jpg",
    nama: "Mochamad Ferdy Fauzan",
  },
  {
    gambar: "211524050.jpg",
    nama: "Muhammad Daffa Raihandika",
  },
  {
    gambar: "211524051.jpg",
    nama: "Muhammad Rafi Farhan",
  },
  {
    gambar: "211524052.jpg",
    nama: "Nayara Saffa",
  },
  {
    gambar: "211524053.jpg",
    nama: "Novia Nur Azizah",
  },
  {
    gambar: "211524054.jpg",
    nama: "Rachmat Purwa Saputra",
  },
  {
    gambar: "211524055.jpg",
    nama: "Rahma Alia Latifa",
  },
  {
    gambar: "211524056.jpg",
    nama: "Raka Mahardika Maulana",
  },
  {
    gambar: "211524057.jpg",
    nama: "Regi Purnama",
  },
  {
    gambar: "211524058.jpg",
    nama: "Reihan Hadi Fauzan",
  },
  {
    gambar: "211524059.jpg",
    nama: "Reza Ananta Permadi Supriyo",
  },
  {
    gambar: "211524060.jpg",
    nama: "Rivaldo Fauzan Robani",
  },
  {
    gambar: "211524061.jpg",
    nama: "Rofa'ul Akrom Hendrawan",
  },
  {
    gambar: "211524062.jpg",
    nama: "Sendi Setiawan",
  },
  {
    gambar: "211524063.jpg",
    nama: "Syifa Khairina",
  },
  {
    gambar: "211524064.jpg",
    nama: "Yasmin Azizah Tuhfah",
  },
];

/*
      <div class="persons-wrapper">
        <div class="person">
          <div class="person-photo">
            <img src="https://akademik.polban.ac.id/fotomhsrekap/211524046.jpg"></img>
          </div>
          <div class="person-bio">
            <h5 class="text-dark-blue">Jovan Shelomo</h5>
            <p class="text-med-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem erat, euismod sit amet aliquet ut, imperdiet at tortor. Praesent id facilisis dolor. Vestibulum at quam id dolor tempor pharetra ut in libero.</p>
          </div>
        </div>
       </div>
*/

container = document.getElementsByClassName("persons-wrapper")[0];

for (i = 0; i < mahasiswa.length; i++) {
  person = document.createElement("div");
  person.setAttribute("class", "person");

  person_photo = document.createElement("div");
  person_photo.setAttribute("class", "person-photo");

  person_photo_img = document.createElement("img");
  person_photo_img.setAttribute(
    "src",
    "https://akademik.polban.ac.id/fotomhsrekap/" + mahasiswa[i].gambar
  );

  person_photo.appendChild(person_photo_img);

  person_bio = document.createElement("div");
  person_bio.setAttribute("class", "person-bio");

  person_bio_h5 = document.createElement("h5");
  person_bio_h5.setAttribute("class", "text-dark-blue");
  person_bio_h5.innerHTML = mahasiswa[i].nama;

  person_bio_p = document.createElement("p");
  person_bio_p.setAttribute("class", "text-med-gray");
  person_bio_p.innerHTML = `Lorem ipsum dolor sit amet, namanya adalah <a>${mahasiswa[i].nama}</a>. Consectetur adipiscing elit. Pellentesque lorem erat, euismod sit amet aliquet ut, imperdiet at tortor. Praesent id facilisis dolor. Vestibulum at quam id dolor tempor pharetra ut in libero.`;

  person_bio.appendChild(person_bio_h5);
  person_bio.appendChild(person_bio_p);

  person.appendChild(person_photo);
  person.appendChild(person_bio);

  container.appendChild(person);
}
