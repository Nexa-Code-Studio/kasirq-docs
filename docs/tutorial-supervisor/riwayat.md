---
sidebar_position: 3
---

# Riwayat Transaksi

<div className="role-badge supervisor">
  👤 Role: Supervisor
</div>

Halaman **Riwayat Transaksi** digunakan oleh Supervisor untuk memantau, menelusuri, dan mencetak ulang transaksi yang telah dilakukan oleh kasir maupun supervisor.

Fitur ini dirancang untuk audit ringan, pengecekan kesalahan, dan kebutuhan cetak nota ulang tanpa mengganggu proses transaksi aktif.

![alt text](../../static/img/riwayat.png)

---

## Fungsi Utama Halaman

Supervisor dapat:
- Mencari transaksi tertentu
- Memfilter transaksi berdasarkan kriteria tertentu
- Melihat detail ringkas transaksi
- Mencetak ulang nota transaksi
- Menelusuri data transaksi dalam jumlah besar melalui pagination

---

## Pencarian Transaksi

### Pencarian Cepat

Di bagian atas halaman tersedia kolom pencarian yang dapat digunakan untuk mencari transaksi berdasarkan:

- **ID Transaksi**
- **Nama Pembeli**

Pencarian bersifat **real-time** dan akan langsung memfilter data di tabel.

:::info Catatan
Pencarian nama pembeli hanya berlaku untuk pembeli yang memiliki nama (terdaftar atau kasbon).
:::

---

## Filter Data Transaksi

### Filter Role Pelaku

Supervisor dapat memfilter transaksi berdasarkan **role yang melakukan transaksi**, misalnya:
- Kasir
- Supervisor

Filter ini berguna untuk evaluasi performa atau pengecekan transaksi tertentu.

---

### Filter Tanggal

Tersedia filter rentang waktu transaksi dengan format:

- **From**: tanggal awal
- **To**: tanggal akhir

Filter ini digunakan untuk menampilkan transaksi dalam periode tertentu, misalnya:
- Transaksi harian
- Transaksi mingguan
- Transaksi pada rentang tanggal khusus

---

### Reset Filter

Tombol **Reset Filter** berfungsi untuk:
- Menghapus seluruh filter yang aktif
- Mengembalikan tampilan ke kondisi default

Gunakan fitur ini jika hasil data tidak sesuai atau terlalu sempit akibat filter.

---

## Pengaturan Jumlah Data Ditampilkan

### Show Entries

Supervisor dapat mengatur jumlah baris data yang ditampilkan dalam tabel dengan pilihan:

- **10 entries**
- **20 entries**
- **50 entries**

Pengaturan ini tidak mempengaruhi data asli, hanya tampilan di layar.

---

## Tabel Riwayat Transaksi

Tabel riwayat transaksi menampilkan kolom berikut:

| Kolom | Deskripsi |
|-----|----------|
| **ID Transaksi** | Kode unik transaksi |
| **Waktu** | Tanggal dan jam transaksi dilakukan |
| **Kasir** | Nama pengguna yang melayani transaksi |
| **Pembeli** | Nama pembeli, atau `(Tidak Terdaftar)` jika tidak ada |
| **Items** | Jumlah item dalam transaksi |
| **Metode** | Metode pembayaran (Cash / QRIS / Kasbon) |
| **Total** | Total nilai transaksi |
| **Aksi** | Tindakan lanjutan |

### Status Pembeli

Jika transaksi dilakukan tanpa memilih pembeli, kolom **Pembeli** akan menampilkan (Tidak Terdaftar). Ini bukan error, melainkan kondisi valid untuk transaksi umum.

---

## Aksi Transaksi

### Cetak Nota

Pada kolom **Aksi**, tersedia tombol:

- **Cetak Nota**

Fungsi ini digunakan untuk:
- Mencetak ulang nota transaksi
- Keperluan pembeli
- Audit atau arsip fisik

:::warning Perhatian
Cetak nota hanya akan berhasil jika printer terhubung dan aktif.
:::

---

## Pagination

Di bagian bawah tabel tersedia **pagination** untuk navigasi data, meliputi:

- Tombol **← Sebelumnya**
- Tombol **→ Berikutnya**
- **Nomor halaman** (dapat diklik langsung)

Pagination memungkinkan Supervisor menelusuri data transaksi dalam jumlah besar tanpa membebani tampilan.

---

## Alur Penggunaan Umum


<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <h3>Buka halaman <strong>Riwayat Transaksi</strong></h3>
    <p>Buka halaman Riwayat Transaksi untuk melihat daftar transaksi yang telah dicatat.</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">2</div>
  <div className="step-content">
    <h3>Gunakan Pencarian atau Filter</h3>
    <p>Gunakan kolom pencarian atau filter untuk menemukan transaksi spesifik dengan cepat.</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">3</div>
  <div className="step-content">
    <h3>Atur Jumlah Data (Show Entries)</h3>
    <p>Pilih jumlah baris yang ingin ditampilkan (10 / 20 / 50) sesuai kebutuhan audit.</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">4</div>
  <div className="step-content">
    <h3>Telusuri Menggunakan Pagination</h3>
    <p>Gunakan tombol halaman untuk menelusuri transaksi lama tanpa membebani tampilan.</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">5</div>
  <div className="step-content">
    <h3>Cetak Nota</h3>
    <p>Klik <strong>Cetak Nota</strong> jika perlu mencetak ulang struk atau menyimpan arsip fisik.</p>
  </div>
</div>

---

## Tanggung Jawab Supervisor

:::danger Penting
Menu riwayat digunakan sebagai alat audit. Supervisor bertanggung jawab atas:
- Monitoring transaksi harian
- Deteksi transaksi mencurigakan
- Verifikasi pembayaran non-tunai
- Penyediaan data untuk laporan
- Menjaga kerahasiaan data transaksi
:::

:::warning Perhatian
Data riwayat bersifat final dan tidak dapat diubah.
:::

---

## Troubleshooting

### Data tidak muncul
**Kemungkinan penyebab**:
- Rentang tanggal terlalu sempit
- Filter role tidak sesuai

**Solusi**: Klik **Reset Filter**.

### Nota tidak tercetak
**Solusi**:
- Pastikan printer aktif
- Cek koneksi printer
- Pastikan transaksi valid

---

Halaman ini bersifat **read-only**, tidak dapat mengubah data transaksi.
