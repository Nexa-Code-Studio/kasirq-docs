---
sidebar_position: 2
---

# Transaksi Pembelian

<div className="role-badge supervisor">
  👤 Role: Supervisor
</div>

Halaman **Transaksi** digunakan untuk melakukan proses penjualan langsung (kasir). Supervisor dapat berperan sebagai kasir dan mengawasi jalannya transaksi harian.

## Tampilan Umum Halaman Transaksi

Halaman transaksi terbagi menjadi dua area utama:

- **Area Produk (kiri)** – untuk mencari dan memilih produk
- **Area Keranjang (kanan)** – untuk mengelola pembelian dan pembayaran

Struktur ini dirancang agar proses transaksi cepat, minim klik, dan tidak mengganggu alur kasir.

![alt text](../../static/img/transaksi.png)

---

## Area Produk (Kiri)

### Fungsi Utama

Area produk digunakan untuk mencari dan memilih barang yang akan dijual.

### Cara Menambahkan Produk ke Keranjang

<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <h3>Scan Barcode</h3>
    <p>Scan barcode produk menggunakan scanner. Produk akan otomatis masuk ke keranjang jika ditemukan.</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">2</div>
  <div className="step-content">
    <h3>Cari Manual</h3>
    <p>Gunakan kolom pencarian untuk mencari produk berdasarkan:</p>
    <ul>
      <li>Barcode</li>
      <li>Nama produk</li>
      <li>Merk</li>
    </ul>
  </div>
</div>

<div className="step-container">
  <div className="step-number">3</div>
  <div className="step-content">
    <h3>Filter Kategori</h3>
    <p>Pilih kategori produk untuk mempersempit daftar produk.</p>
  </div>
</div>

### Informasi di Kartu Produk

Setiap kartu produk menampilkan:
- **Nama produk**
- **Kategori**
- **Merk**
- **Harga jual**
- **Jumlah stok tersedia**

Produk dapat ditambahkan ke keranjang dengan **klik kartu produk**.

:::warning Perhatian
Jika stok produk tidak mencukupi, sistem akan menolak penambahan ke keranjang.
:::

---

## Area Keranjang (Kanan)

### Informasi Umum Keranjang

Area keranjang menampilkan:
- Daftar produk yang dipilih
- Harga satuan dan subtotal per produk
- Total keseluruhan transaksi

### Memilih Pembeli (Opsional)

<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <h3>Pilih Pembeli Terdaftar</h3>
    <p>Jika pembeli sudah terdaftar, pilih melalui dropdown pembeli.</p>
  </div>
</div>

Pemilihan pembeli **wajib** jika metode pembayaran adalah **Kasbon**.

---

## Mengatur Produk di Keranjang

### Mengubah Jumlah Produk

Setiap produk di keranjang dapat:
- Ditambah atau dikurangi menggunakan tombol **+ / -**
- Diubah secara manual dengan mengetik jumlah

### Menghapus Produk

Klik ikon **🗑️ Hapus** untuk mengeluarkan produk dari keranjang.

---

## Pengaturan Harga Produk

Setiap produk memiliki pilihan harga:

- **Harga Eceran**
- **Harga Grosir**
- **Harga Reseller**

### Harga Reseller (Edit Manual)

<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <h3>Pilih Harga Reseller</h3>
    <p>Pilih opsi harga reseller pada produk.</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">2</div>
  <div className="step-content">
    <h3>Edit Harga</h3>
    <p>Klik ikon <strong>✏️ Pensil</strong> untuk mengubah harga secara manual.</p>
  </div>
</div>

:::danger Penting
Harga reseller hanya boleh diubah sesuai kebijakan toko.
:::

---

## Total Transaksi

Di bagian bawah keranjang akan ditampilkan:
- **Total keseluruhan harga**
- Perhitungan otomatis berdasarkan jumlah dan jenis harga

---

## Proses Pembayaran

Klik tombol **Bayar** untuk melanjutkan ke dialog pembayaran.

### Metode Pembayaran

#### 1. 💵 Cash

- Masukkan jumlah uang yang diterima
- Sistem otomatis menghitung **kembalian**
- Tersedia tombol **Uang Pas** untuk transaksi cepat

#### 2. 📱 QRIS

- Pembeli melakukan pembayaran melalui QRIS (misalnya GoPay)
- Supervisor/Kasir melakukan **konfirmasi manual**
- Tidak ada input nominal di sistem

#### 3. 🧾 Kasbon

:::warning Wajib
Pembayaran kasbon wajib memiliki data pembeli.
:::

Jika pembeli belum terdaftar, isi form berikut:
- Nama pembeli
- Nomor kontak
- Jatuh tempo pembayaran
- Uang muka (opsional)

---

## Transaksi Berhasil

Setelah pembayaran berhasil:
- Sistem menampilkan **notifikasi transaksi sukses**
- Data transaksi otomatis tersimpan

### Cetak Nota

Tergantung pengaturan sistem:
- **Auto Cetak Nota** – Nota langsung dicetak
- **Manual Cetak** – Tidak mencetak otomatis

Pengaturan ini dapat diubah di menu **Pengaturan**.

---

## Tanggung Jawab Supervisor

:::danger Penting
Supervisor bertanggung jawab atas validitas transaksi yang berjalan. Pastikan untuk:
- Mengawasi transaksi bernilai besar
- Memastikan kasir mengikuti prosedur
- Memverifikasi transaksi kasbon
- Menghindari penyalahgunaan edit harga reseller
:::

:::tip Best Practice
- Pantau transaksi secara berkala
- Periksa selisih cash harian
- Validasi data pembeli kasbon
- Berikan arahan jika kasir melakukan kesalahan
:::

---

## Troubleshooting

### Produk tidak masuk saat scan barcode
Kemungkinan:
- Barcode tidak terdaftar
- Produk stok habis

**Solusi**: Cari manual atau cek data produk.

### Tidak bisa memilih kasbon
**Penyebab**: Pembeli belum dipilih atau diisi.  
**Solusi**: Lengkapi data pembeli terlebih dahulu.

### Nota tidak tercetak
**Solusi**:
- Cek pengaturan auto print
- Pastikan printer aktif dan terhubung

---

## FAQ – Transaksi Supervisor

**Q: Apakah supervisor bisa mengubah harga produk?**  
A: Ya, **khusus harga reseller** sesuai kebijakan toko.

**Q: Apakah transaksi bisa dibatalkan?**  
A: Tidak. Transaksi yang sudah selesai bersifat final.

**Q: Kapan kasbon boleh digunakan?**  
A: Jika data pembeli lengkap dan sesuai aturan toko.

**Q: Apakah semua transaksi harus diawasi supervisor?**  
A: Tidak, tetapi supervisor wajib siap menangani transaksi bermasalah.
