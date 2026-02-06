---
sidebar_position: 6
---

# Kelola Kasbon

<div className="role-badge kasir">
  👤 Role: Kasir
</div>

Halaman **Kelola Kasbon** digunakan oleh **Kasir** untuk **melihat, mencari, dan memproses pembayaran kasbon pembeli** yang berasal dari transaksi penjualan.

Kasir **tidak dapat menghapus atau mengubah data kasbon**, hanya melakukan **pencarian, pembayaran, dan melihat detail**.

![alt text](img/kasbon.png)

---

## Fungsi Utama Halaman

Kasir dapat:
- Mencari data kasbon
- Melihat status hutang pembeli
- Mencatat pembayaran kasbon
- Melihat detail riwayat pembayaran
- Menelusuri data kasbon melalui pagination

---

## Pencarian Kasbon

Di bagian atas halaman tersedia kolom pencarian untuk mencari kasbon berdasarkan:

- **ID Transaksi**
- **Nama Pembeli**

Pencarian bersifat **real-time** dan akan langsung memfilter data di tabel.

:::info Catatan
Pencarian nama pembeli hanya berlaku jika pembeli terdaftar.
:::

---

## Navigasi Data

Kasir dapat:
- Mengatur **Show Entries**:
  - 10
  - 20
  - 50
- Menggunakan **Pagination**:
  - Tombol ← Sebelumnya
  - Tombol → Berikutnya
  - Klik nomor halaman langsung

---

## Tabel Data Kasbon

Tabel kasbon menampilkan informasi berikut:

| Kolom | Deskripsi |
|----|----|
| Nama Pembeli | Nama pelanggan |
| ID Transaksi | ID transaksi kasbon |
| Tanggal Kasbon | Tanggal transaksi kasbon |
| Total | Total hutang |
| Dibayar | Total yang sudah dibayar |
| Sisa | Sisa hutang |
| Status | Belum Lunas / Lunas |
| Aksi | Bayar / Detail |

---

## Aksi Pembayaran Kasbon

### Bayar Kasbon

Klik tombol **Bayar** untuk membuka dialog pembayaran.

#### Informasi Kasbon

Ditampilkan secara ringkas:
- Nama pembeli
- ID transaksi
- Total hutang
- Total sudah dibayar
- Sisa hutang

---

### Form Pembayaran

Kasir mengisi:
- Jumlah pembayaran
- Tombol cepat:
  - **Bayar Lunas**
  - **Bayar 50%**
- Metode pembayaran

Klik **Bayar** untuk menyimpan pembayaran.

:::warning Perhatian
Kasir tidak dapat:
- Mengubah total hutang
- Mengubah jatuh tempo
- Menghapus kasbon
:::

---

## Detail Kasbon

Klik tombol **Detail** untuk melihat informasi lengkap kasbon.

### Informasi Detail

- Nama pembeli
- ID transaksi
- Total hutang
- Sudah dibayar
- Sisa hutang
- Status

---

### Riwayat Pembayaran

Tabel riwayat pembayaran:

| Tanggal | Jumlah | Metode | Penerima |
|----|----|----|----|

Riwayat ini bersifat **read-only**.

---

## Batasan Akses Kasir

:::danger Penting
Kasir hanya memiliki akses:
- Melihat data kasbon
- Mencatat pembayaran

Kasir **tidak memiliki akses** untuk:
- Menghapus data kasbon
- Mengubah nominal hutang
:::

---

## FAQ — Kelola Kasbon (Kasir)

**Q: Apakah kasir bisa menghapus kasbon?**  
A: Tidak. Kasbon hanya bisa dilunasi, bukan dihapus.

**Q: Apakah kasir bisa mengubah jatuh tempo?**  
A: Tidak. Jatuh tempo hanya dapat diubah oleh Supervisor.

**Q: Apakah pembayaran harus lunas?**  
A: Tidak. Pembayaran parsial diperbolehkan.

**Q: Apakah kasbon otomatis lunas jika dibayar penuh?**  
A: Ya. Status akan otomatis berubah menjadi **Lunas**.

---

Halaman ini bersifat **operasional**.
