---
sidebar_position: 7
---

# Kelola Akun & Karyawan

<div className="role-badge supervisor">
  👤 Role: Supervisor
</div>

Halaman **Kelola Akun & Karyawan** digunakan oleh **Supervisor** untuk mengelola akun pengguna internal toko, termasuk akun supervisor sendiri dan akun kasir.

Fitur ini mencakup pengelolaan profil, manajemen karyawan, serta informasi hak akses berdasarkan role.

![alt text](img/karyawan.png)

---

## Profil Akun Saya

Card ini menampilkan informasi akun supervisor yang sedang login.

### Informasi Akun

- **Nama**
- **Username**
- **Nomor Telepon**

### Aksi Profil

- **Edit Profil**
  - Ubah nama
  - Ubah username
  - Ubah nomor telepon

- **Ubah Kata Sandi**
  - Kata sandi lama
  - Kata sandi baru
  - Konfirmasi kata sandi baru

:::info Catatan
Perubahan profil hanya berlaku untuk akun sendiri dan tidak memengaruhi akun karyawan lain.
:::

---

## Ringkasan Karyawan

### Card Summary

Menampilkan statistik akun internal toko:

- **Total Karyawan**
- **Total Supervisor**
- **Total Kasir**

Ringkasan ini membantu Supervisor memantau struktur SDM secara cepat.

---

## Informasi Hak Akses

Bagian ini menampilkan perbedaan hak akses berdasarkan role.

### Supervisor

Supervisor memiliki akses penuh, meliputi:
- Kelola produk & stok
- Kelola kategori & brand
- Kelola pelanggan & member
- Kelola keuangan & pengeluaran
- Kelola pengguna
- Lihat laporan & analitik

---

### Kasir

Kasir memiliki akses terbatas, meliputi:
- Lihat dashboard (ringkas)
- Proses transaksi penjualan
- Lihat & cetak riwayat transaksi

Kasir **tidak dapat**:
- Mengelola data master
- Mengelola pengguna
- Melihat laporan & analitik

---

## Daftar Karyawan

Bagian ini menampilkan seluruh akun karyawan yang terdaftar, termasuk akun Supervisor.

### Fitur

Supervisor dapat:
- Mencari karyawan
- Menambah karyawan baru
- Mengedit data karyawan
- Menonaktifkan atau menghapus akun

---

### Pencarian

Kolom pencarian mendukung pencarian berdasarkan:
- Nama karyawan
- Username
- Nomor telepon

Pencarian bersifat **real-time**.

---

## Tambah Karyawan

Klik tombol **Tambah Karyawan** untuk membuka form.

### Form Tambah Karyawan

Field yang harus diisi:
- Nama karyawan
- Username
- Nomor telepon
- Password
- Role (Supervisor / Kasir)

Klik **Simpan** untuk membuat akun baru.

:::warning Perhatian
Username harus unik dan tidak boleh sama dengan akun lain.
:::

---

## Tabel Karyawan

| Kolom | Deskripsi |
|----|----|
| Nama | Nama karyawan |
| Username | Username login |
| No. Telepon | Nomor kontak |
| Role | Supervisor / Kasir |
| Status | Aktif / Nonaktif |
| Aksi | Edit / Hapus |

### Catatan Aksi

- **Akun sendiri**:
  - Tidak memiliki tombol Edit / Hapus
  - Perubahan dilakukan melalui **Profil Akun Saya**
- **Akun karyawan lain**:
  - Bisa diedit
  - Bisa dinonaktifkan
  - Bisa dihapus

---

## Edit Karyawan

Klik tombol **Edit** pada baris karyawan.

### Field Edit

- Nama karyawan
- Username
- Nomor telepon
- Password baru  
  *(Kosongkan jika tidak ingin mengubah password)*
- Status aktif (checkbox)

Klik **Simpan Perubahan** untuk menyimpan data.

---

## Hapus Karyawan

Klik tombol **Hapus** untuk menghapus akun karyawan.

:::danger Peringatan
Penghapusan akun bersifat permanen dan tidak dapat dibatalkan.
Pastikan akun tidak sedang digunakan.
:::

---

## Tanggung Jawab Supervisor

:::danger Penting
Supervisor bertanggung jawab atas:
- Keamanan akun internal
- Validitas data karyawan
- Pembagian role yang tepat
- Penonaktifan akun karyawan yang tidak aktif
- Kerahasiaan kredensial login
:::

Kesalahan pengelolaan akun dapat menyebabkan kebocoran data dan gangguan operasional.

---

## FAQ — Kelola Akun & Karyawan

**Q: Apakah Supervisor bisa menghapus akunnya sendiri?**  
A: Tidak. Akun sendiri tidak memiliki aksi hapus.

**Q: Apakah password kasir bisa direset?**  
A: Ya. Supervisor dapat mengisi password baru saat edit karyawan.

**Q: Apakah kasir bisa dijadikan supervisor?**  
A: Bisa, dengan mengubah role pada menu Edit Karyawan.

**Q: Apa yang terjadi jika akun dinonaktifkan?**  
A: Akun tidak bisa login, tetapi data transaksi tetap tersimpan.

---

Halaman ini hanya dapat diakses oleh **Supervisor**  
dan bersifat **kritis untuk keamanan sistem**.
