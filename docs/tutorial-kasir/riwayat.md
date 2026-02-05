---
sidebar_position: 3
---

# Riwayat Transaksi

<div className="role-badge kasir">
  👤 Role: Kasir
</div>

Halaman **Riwayat Transaksi** digunakan oleh Kasir untuk melihat kembali transaksi yang telah dilakukannya, melakukan pengecekan, serta mencetak ulang nota jika diperlukan.

Halaman ini bersifat **read-only** dan hanya menampilkan transaksi yang dilakukan oleh akun kasir yang sedang login.

---

## Fungsi Utama Halaman

Kasir dapat:
- Mencari transaksi yang pernah dilakukan
- Memfilter transaksi berdasarkan tanggal
- Melihat ringkasan transaksi
- Mencetak ulang nota transaksi
- Menelusuri data transaksi melalui pagination

---

## Pencarian Transaksi

### Pencarian Cepat

Di bagian atas halaman tersedia kolom pencarian yang dapat digunakan untuk mencari transaksi berdasarkan:

- **ID Transaksi**
- **Nama Pembeli**

Pencarian bersifat **real-time** dan langsung memfilter data pada tabel.

:::info Catatan
Jika transaksi tidak memiliki data pembeli, kolom pembeli akan ditampilkan sebagai `(Tidak Terdaftar)`.
:::

---

## Filter Data Transaksi

### Filter Tanggal

Kasir dapat memfilter transaksi berdasarkan rentang tanggal:

- **From**: tanggal awal
- **To**: tanggal akhir

Filter ini berguna untuk:
- Mencari transaksi hari tertentu
- Rekap transaksi harian
- Menelusuri transaksi lama

---

### Reset Filter

Tombol **Reset Filter** berfungsi untuk:
- Menghapus seluruh filter aktif
- Mengembalikan data ke tampilan default

Gunakan fitur ini jika hasil pencarian tidak sesuai atau terlalu terbatas.

---

## Pengaturan Jumlah Data Ditampilkan

### Show Entries

Kasir dapat memilih jumlah data yang ditampilkan dalam tabel:

- **10 entries**
- **20 entries**
- **50 entries**

Pengaturan ini hanya mempengaruhi tampilan, bukan data transaksi.

---

## Tabel Riwayat Transaksi

Tabel riwayat transaksi menampilkan kolom berikut:

| Kolom | Deskripsi |
|-----|----------|
| **ID Transaksi** | Kode unik transaksi |
| **Waktu** | Tanggal dan jam transaksi |
| **Kasir** | Nama kasir (akun yang sedang login) |
| **Pembeli** | Nama pembeli atau `(Tidak Terdaftar)` |
| **Items** | Jumlah item dalam transaksi |
| **Metode** | Metode pembayaran (Cash / QRIS / Kasbon) |
| **Total** | Total nilai transaksi |
| **Aksi** | Cetak Nota |

---

## Aksi Transaksi

### Cetak Nota

Pada kolom **Aksi**, tersedia tombol:

- **Cetak Nota**

Fungsi ini digunakan untuk:
- Mencetak ulang nota
- Memberikan salinan struk ke pembeli
- Keperluan arsip

:::warning Perhatian
Cetak nota hanya dapat dilakukan jika printer aktif dan terhubung.
:::

---

## Pagination

Di bagian bawah tabel tersedia **pagination**, meliputi:

- Tombol **← Sebelumnya**
- Tombol **→ Berikutnya**
- Nomor halaman (klik langsung)

Pagination membantu kasir menelusuri transaksi tanpa membebani tampilan.

---

## Alur Penggunaan Umum

<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <h3>Buka halaman <strong>Riwayat Transaksi</strong></h3>
    <p>Masuk ke menu Riwayat Transaksi melalui sidebar.</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">2</div>
  <div className="step-content">
    <h3>Gunakan Pencarian atau Filter Tanggal</h3>
    <p>Cari transaksi tertentu menggunakan ID, nama pembeli, atau rentang tanggal.</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">3</div>
  <div className="step-content">
    <h3>Atur Show Entries</h3>
    <p>Pilih jumlah data yang ingin ditampilkan (10 / 20 / 50).</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">4</div>
  <div className="step-content">
    <h3>Telusuri dengan Pagination</h3>
    <p>Gunakan navigasi halaman untuk melihat transaksi lainnya.</p>
  </div>
</div>

<div className="step-container">
  <div className="step-number">5</div>
  <div className="step-content">
    <h3>Cetak Nota</h3>
    <p>Klik <strong>Cetak Nota</strong> jika diperlukan.</p>
  </div>
</div>

---

## Tanggung Jawab Kasir

:::danger Penting
Kasir bertanggung jawab atas transaksi yang dilakukan menggunakan akunnya, termasuk:
- Memastikan transaksi dicatat dengan benar
- Menggunakan metode pembayaran sesuai kondisi
- Tidak melakukan transaksi fiktif
- Menjaga kerahasiaan data transaksi
:::

---

## Troubleshooting

### Transaksi tidak ditemukan
**Kemungkinan penyebab**:
- Salah memasukkan ID transaksi
- Rentang tanggal terlalu sempit

**Solusi**: Gunakan **Reset Filter**.

### Nota tidak tercetak
**Solusi**:
- Pastikan printer aktif
- Periksa koneksi printer
- Coba cetak ulang

---

## FAQ – Riwayat Transaksi Kasir

**Q: Apakah kasir bisa melihat transaksi kasir lain?**  
A: Tidak. Kasir hanya dapat melihat transaksi yang dilakukan oleh akunnya sendiri.

**Q: Apakah transaksi bisa dihapus atau diedit?**  
A: Tidak. Data bersifat final dan hanya bisa dibaca.

**Q: Apakah semua transaksi bisa dicetak ulang?**  
A: Ya, selama printer tersedia dan transaksi valid.

