import React, { useEffect } from 'react';
import './privacy.css';

function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="privacy container fs-18">
      <div className="head">
        <h1>
          <strong>Kebijakan Privasi Creative Hustle</strong>
        </h1>
        <p>Pemutakhiran terakhir 16 Juli 2020</p>
      </div>
      <div className="matter">
        <p>
          Sebagai penyedia jasa pembelajaran melalui kursus dan kelas, kami Creative Hustle sangat
          menjunjung tinggi privasi customer. Hal ini karena informasi pribadi merupakan hal yang
          sangat krusial dan tidak boleh diketahui siapapun. Berikut akan kami jelaskan mengenai
          informasi apa saja yang kami terima dan kami kumpulkan pada saat Anda mengunjungi situs
          Creative Hustle. Serta, tentang bagaimana kami menyimpan dan menjaga informasi tersebut.
          Kami tegaskan bahwa kami tidak akan pernah memberikan informasi tersebut kepada siapapun
          termasuk pihak ketiga.
        </p>
        <div>
          <h4>
            <strong>Informasi yang Dikumpulkan</strong>
          </h4>
          <ul>
            <li>
              <h5>File log</h5>
              <p>
                Seperti situs lain pada umumnya, kami mengumpulkan dan menggunakan data yang
                terdapat pada file log. Informasi yang terdapat pada file log termasuk alamat IP
                (Internet Protocol) Anda, ISP (Internet Service Provider), browser yang Anda
                gunakan, waktu pada saat Anda berkunjung serta halaman mana saja yang Anda buka
                selama berkunjung di Creative Hustle.
              </p>
            </li>
            <li>
              <h5>Cookies</h5>
              <p>
                Situs kami menggunakan cookies untuk menyimpan berbagai informasi seperti preferensi
                pribadi pada saat mengunjungi situsCreative Hustle serta informasi login.Creative
                Hustle juga menggunakan layanan tracking dari pihak ketiga untuk mendukung situs
                kami. Beberapa layanan tersebut mungkin menggunakan cookies ketika melakukan
                tracking di situs kami.Creative Hustle bekerja sama dengan layanan tracker seperti
                Google AdWords, Google Analytics, AdRoll serta CrazyEgg. Dimana informasi yang
                dikirim dapat berupa alamat IP, ISP, browser, sistem operasi yang Anda pakai, dan
                sebagainya.
              </p>
            </li>
            <li>
              <h5>Data Pengguna</h5>
              <p>
                Data pengguna meliputi: Nama; Informasi kontak, termasuk alamat email; Data
                demografi seperti kode pos, preferensi, dan minat; Informasi lain yang berhubungan
                dengan survei pelanggan dan/penawaran.
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h4>
            <strong>Penggunaan Informasi</strong>
          </h4>
          <p>
            Kami menggunakan informasi yang dikumpulkan di situs kami untuk penargetan iklan
            berdasarkan relevansi informasi; Memberikan pengalaman yang lebih baik kepada Anda dalam
            bentuk penawaran produk, survey layanan yang relevan; Mengirimkan promosi kepada anda
            dalam bentuk email atau sms maupun telepon; Meningkatkan pelayanan kami dalam bentuk
            perbaikan dalam situs.
          </p>
        </div>
        <div>
          <h4>
            <strong>Perubahan</strong>
          </h4>
          <p>
            Dengan mengakses situsCreative Hustle, maka Anda setuju bahwa kebijakan privasi ini
            dapat diubah dalam hal apa saja dan kapan saja olehCreative Hustle. Penggunaan Layanan
            yang tetap Anda lakukan secara kontinyu akan dianggap setuju terhadap perubahan
            tersebut. Jika Anda tidak ingin melanjutkan menggunakan Layanan kami karena perubahan
            tersebut, Anda dapat memberitahukan keinginan Anda untuk menghentikan penggunaan jasa
            Layanan keCreative Hustle.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
