---
sidebar_position: 1
---

# Panduan Supervisor

<div className="role-badge supervisor">
  👤 Role: Supervisor
</div>

Halaman **Dashboard Supervisor** di **KasirQ** berfungsi sebagai pusat monitoring operasional toko. Di halaman ini, Supervisor dapat melihat ringkasan performa penjualan, kondisi stok, serta aktivitas transaksi terbaru **tanpa perlu masuk ke menu detail satu per satu**.

Dashboard dirancang untuk membantu pengambilan keputusan cepat dan pengawasan harian toko.

## Tampilan Dashboard

Setelah login sebagai Supervisor, Anda akan langsung diarahkan ke halaman dashboard yang menampilkan beberapa komponen utama berikut.
![alt text](../../static/img/dashboard.spv.png)

## Ringkasan Utama (Summary Cards)

Pada bagian atas dashboard, tersedia kartu ringkasan yang menampilkan kondisi toko **hari ini** secara real-time:

<div className="feature-grid">
  <div className="feature-card">
    <div className="feature-card-icon" style={{backgroundColor: 'rgba(76, 175, 80, 0.1)', color: '#4CAF50'}}>
      💰
    </div>
    <div className="feature-card-title">Penjualan Hari Ini</div>
    <div className="feature-card-description">
      Total nilai penjualan yang tercatat pada hari berjalan
    </div>
  </div>

  <div className="feature-card">
    <div className="feature-card-icon" style={{backgroundColor: 'rgba(33, 150, 243, 0.1)', color: '#2196F3'}}>
      🧾
    </div>
    <div className="feature-card-title">Total Transaksi</div>
    <div className="feature-card-description">
      Jumlah transaksi yang berhasil diproses hari ini
    </div>
  </div>

  <div className="feature-card">
    <div className="feature-card-icon" style={{backgroundColor: 'rgba(255, 152, 0, 0.1)', color: '#FF9800'}}>
      📦
    </div>
    <div className="feature-card-title">Stok Menipis</div>
    <div className="feature-card-description">
      Jumlah produk dengan stok di bawah batas minimum
    </div>
  </div>

  <div className="feature-card">
    <div className="feature-card-icon" style={{backgroundColor: 'rgba(156, 39, 176, 0.1)', color: '#9C27B0'}}>
      📈
    </div>
    <div className="feature-card-title">Keuntungan Hari Ini</div>
    <div className="feature-card-description">
      Estimasi keuntungan bersih dari penjualan hari ini
    </div>
  </div>
</div>

## Grafik Penjualan 7 Hari Terakhir

Dashboard menampilkan **grafik batang (bar chart)** yang menunjukkan performa penjualan dalam 7 hari terakhir.

Grafik ini membantu Supervisor untuk:
- Melihat tren penjualan harian
- Membandingkan performa hari ini dengan hari sebelumnya
- Mengidentifikasi penurunan atau lonjakan penjualan

> Data grafik diperbarui otomatis berdasarkan transaksi yang tercatat di sistem.

## Peringatan Stok Menipis

Pada bagian **Peringatan Stok**, sistem akan menampilkan daftar produk dengan stok **di bawah 15 unit**.

Informasi yang ditampilkan meliputi:
- Nama produk
- Sisa stok saat ini
- Kategori atau merek (jika tersedia)

Fitur ini membantu Supervisor untuk:
- Mengantisipasi kehabisan stok
- Menentukan prioritas restock
- Menghindari gangguan operasional kasir

:::warning Perhatian
Produk dengan stok di bawah 15 unit sebaiknya segera dilakukan penambahan stok untuk mencegah penjualan terhenti.
:::

## Transaksi Terbaru Hari Ini

Dashboard juga menampilkan daftar **transaksi terbaru hari ini**, dengan batas maksimal **5 transaksi terakhir**.

Setiap item transaksi biasanya menampilkan:
- Waktu transaksi
- Nomor transaksi
- Total pembayaran
- Metode pembayaran

Fungsi utama bagian ini:
- Monitoring aktivitas kasir secara cepat
- Deteksi transaksi tidak wajar
- Validasi operasional harian tanpa membuka menu laporan

## Peran Dashboard bagi Supervisor

Dashboard Supervisor **bukan hanya tampilan informasi**, tetapi alat kontrol harian untuk memastikan:
- Penjualan berjalan normal
- Stok dalam kondisi aman
- Aktivitas kasir terpantau
- Keputusan operasional bisa diambil cepat

## Langkah Selanjutnya

Setelah memahami dashboard, Anda dapat melanjutkan ke panduan berikut:
[Monitoring Transaksi](/docs/tutorial-supervisor/transaksi)

<!-- - [Manajemen Produk & Stok](/docs/roles/supervisor/products)
- [Monitoring Transaksi](/docs/roles/supervisor/transactions)
- [Laporan Penjualan & Keuangan](/docs/roles/supervisor/reports)
- [Manajemen Karyawan](/docs/roles/supervisor/employees) -->

---

## Tanggung Jawab Supervisor

:::danger Penting
Sebagai Supervisor, Anda bertanggung jawab langsung terhadap operasional toko harian. Pastikan untuk:
- Mengawasi aktivitas transaksi kasir secara rutin
- Memastikan stok produk tetap tersedia dan akurat
- Menindaklanjuti peringatan stok menipis
- Memeriksa laporan penjualan dan keuntungan harian
- Menjaga kerahasiaan akses akun supervisor
:::

:::tip Best Practice
- Cek dashboard di awal dan akhir shift
- Review transaksi hari ini untuk mendeteksi kejanggalan
- Lakukan pengecekan stok fisik secara berkala
- Koordinasi dengan kasir jika terjadi selisih data
- Pastikan data tersinkron sebelum tutup toko
:::

## FAQ untuk Supervisor

**Q: Apakah Supervisor bisa melakukan transaksi penjualan?**  

A: Ya. Supervisor dapat mengakses menu kasir dan melakukan transaksi seperti kasir biasa jika diperlukan.

**Q: Apa yang harus dilakukan jika stok di sistem tidak sesuai dengan stok fisik?**  

A: Lakukan pengecekan ulang, kemudian sesuaikan stok melalui menu produk atau laporkan ke admin jika diperlukan audit.

**Q: Mengapa ada peringatan stok menipis?**  

A: Peringatan muncul jika stok produk berada di bawah 15 unit sebagai pengingat untuk segera melakukan restock.

**Q: Berapa transaksi yang ditampilkan di dashboard?**  

A: Dashboard menampilkan maksimal 5 transaksi terbaru pada hari berjalan untuk monitoring cepat.

**Q: Apakah Supervisor bisa mengakses laporan keuangan?**  

A: Ya. Supervisor dapat melihat laporan penjualan dan keuntungan, namun tidak dapat mengubah konfigurasi sistem keuangan.


