---
sidebar_position: 2
---

# Transaksi

<div className="role-badge kasir">
  👤 Role: Kasir
</div>

Menu **Transaksi** digunakan oleh kasir untuk melakukan proses penjualan secara langsung, mulai dari memilih produk hingga mencetak nota pembayaran.

Menu ini merupakan inti dari aktivitas kasir sehari-hari.

![alt text](img/transaksi.png)

---

## Tujuan Menu Transaksi

Menu Transaksi dirancang agar kasir dapat:
- Melayani pembeli dengan cepat dan akurat
- Mengurangi kesalahan input produk dan pembayaran
- Memastikan semua transaksi tercatat di sistem
- Mencetak nota sebagai bukti transaksi

---

## Alur Umum Transaksi

<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <h3>Pilih produk ke keranjang</h3>
    <p>Tambahkan produk yang dibeli oleh pelanggan ke keranjang belanja.</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">2</div>
  <div className="step-content">
    <h3>Periksa jumlah dan total harga</h3>
    <p>Periksa kuantitas, diskon, dan total harga sebelum melanjutkan.</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">3</div>
  <div className="step-content">
    <h3>Pilih metode pembayaran</h3>
    <p>Pilih salah satu metode pembayaran yang tersedia (Cash, QRIS, Kasbon).</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">4</div>
  <div className="step-content">
    <h3>Konfirmasi transaksi</h3>
    <p>Konfirmasi transaksi untuk menyimpan dan memproses pembayaran.</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">5</div>
  <div className="step-content">
    <h3>Cetak nota</h3>
    <p>Cetak nota sebagai bukti pembayaran dan serahkan kepada pembeli.</p>
  </div>
</div>

---

## Keranjang Belanja

### Menambahkan Produk

Kasir dapat menambahkan produk ke keranjang dengan:
- Mencari produk berdasarkan nama atau kode
- Memilih produk dari daftar

Setiap produk yang ditambahkan akan menampilkan:
- Nama produk
- Harga jual
- Jumlah (qty)
- Subtotal

---

### Mengubah Jumlah Item

Kasir dapat:
- Menambah jumlah item
- Mengurangi jumlah item
- Menghapus item dari keranjang

:::warning Perhatian
Kasir **tidak dapat mengubah harga produk**.
Harga yang digunakan adalah harga jual yang telah ditentukan sistem.
:::

---

## Informasi Pembeli

Pada saat transaksi, kasir dapat:
- Memilih pembeli yang sudah terdaftar
- Melanjutkan transaksi tanpa pembeli

Jika pembeli tidak dipilih, sistem akan menandai sebagai (Tidak Terdaftar) 
---

## Metode Pembayaran

Kasir dapat memilih salah satu metode pembayaran berikut:

- **Cash**
- **QRIS**
- **Kasbon** *(jika diizinkan oleh sistem)*

Setiap metode pembayaran akan dicatat secara otomatis dalam transaksi.

:::info Catatan
Akses metode pembayaran dapat berbeda tergantung kebijakan toko.
:::

---

## Ringkasan Transaksi

Sebelum konfirmasi, sistem akan menampilkan ringkasan:

- Total item
- Total harga
- Metode pembayaran
- Nama kasir yang melayani

Kasir **wajib memastikan data sudah benar** sebelum melanjutkan.

---

## Konfirmasi & Penyimpanan Transaksi

Setelah dikonfirmasi:
- Transaksi akan disimpan ke sistem
- Stok produk akan otomatis berkurang
- Transaksi akan masuk ke riwayat

Tindakan ini **tidak dapat dibatalkan oleh kasir**.

---

## Cetak Nota

Setelah transaksi berhasil, kasir dapat:
- Mencetak nota langsung
- Mencetak ulang nota dari riwayat transaksi hari ini

Nota berisi:
- ID transaksi
- Waktu transaksi
- Daftar item
- Metode pembayaran
- Total pembayaran

---

## Batasan Akses Kasir

Kasir **tidak dapat**:
- Mengubah harga produk
- Mengedit transaksi yang sudah tersimpan
- Menghapus transaksi
- Mengakses laporan keuangan

Semua perubahan lanjutan harus melalui **Supervisor**.

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

## Tanggung Jawab Kasir

:::danger Penting
Kasir bertanggung jawab penuh atas transaksi yang dilakukan. Pastikan untuk:
- Memeriksa item dan jumlah sebelum konfirmasi
- Memilih metode pembayaran yang benar
- Mencetak dan menyerahkan nota ke pembeli
- Tidak melakukan transaksi fiktif
- Segera melapor jika terjadi kesalahan
:::

:::tip Best Practice
- Biasakan cek ulang sebelum klik konfirmasi
- Jangan tinggalkan transaksi setengah jalan
- Pastikan printer siap sebelum jam operasional
:::

---

## FAQ untuk Kasir

**Q: Apakah kasir bisa mengubah harga produk?**  
A: Tidak. Harga produk sudah ditentukan sistem dan tidak dapat diubah oleh kasir.

**Q: Bagaimana jika salah memilih metode pembayaran?**  
A: Laporkan ke supervisor untuk penanganan lebih lanjut.

**Q: Apakah transaksi bisa dibatalkan?**  
A: Tidak. Setelah dikonfirmasi, transaksi bersifat final.

**Q: Kenapa tidak bisa pilih kasbon?**  
A: Fitur kasbon tergantung kebijakan toko dan pengaturan sistem.

**Q: Jika printer bermasalah saat cetak nota?**  
A: Periksa koneksi printer. Jika gagal, cetak ulang setelah printer siap.

---

## Catatan

Menu Transaksi kasir dibuat **sederhana dan terkunci** untuk menjaga:
- Keamanan data
- Konsistensi harga
- Akurasi laporan

Untuk pengelolaan lanjutan, gunakan menu Supervisor.


