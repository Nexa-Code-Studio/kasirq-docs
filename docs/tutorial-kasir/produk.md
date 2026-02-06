---
sidebar_position: 4
---

# Melihat Produk & Stok

<div className="role-badge kasir">
  👤 Role: Kasir
</div>

Halaman **Melihat Produk & Stok** digunakan oleh **Kasir** untuk **melihat informasi produk dan ketersediaan stok** sebagai referensi saat melayani transaksi.

Kasir **tidak memiliki hak** untuk menambah, mengubah, atau menghapus data produk maupun stok.

![alt text](img/produk.png)

---

## Fitur yang Tersedia

Pada halaman ini, Kasir hanya dapat melakukan:
- Pencarian produk
- Filter kategori
- Navigasi data (pagination)
- Melihat detail harga dan stok

Semua data bersifat **read-only**.

---

## Pencarian Produk

Kolom pencarian mendukung pencarian berdasarkan:
- **Nama produk**
- **Barcode**
- **Brand produk**

Pencarian bersifat **real-time** dan tidak mengubah data apa pun.

---

## Filter Kategori

Kasir dapat memfilter produk berdasarkan:
- **Kategori yang tersedia di sistem**

Filter ini membantu mempercepat pencarian produk saat transaksi.

---

## Show Entries & Pagination

- Opsi **Show entries**:
  - 10
  - 20
  - 50
- **Pagination**:
  - Tombol navigasi kiri / kanan
  - Klik langsung nomor halaman

Digunakan untuk menyesuaikan jumlah data yang ditampilkan.

---

## Tabel Produk

| Kolom | Deskripsi |
|----|----|
| No | Nomor urut |
| Barcode | Kode barcode produk |
| Nama Produk | Nama produk |
| Kategori | Kategori produk |
| Brand | Brand produk |
| Harga Modal | Harga beli (informasi) |
| Harga Eceran | Harga jual ecer |
| Harga Grosir | Harga jual grosir |
| Harga Reseller | Harga khusus reseller |
| Stok | Jumlah stok tersedia |
| Profit | Margin keuntungan |

---

:::info Catatan
- Harga modal dan profit **ditampilkan sebagai informasi**
- Tidak ada fitur edit atau aksi lanjutan
:::

---

## Batasan Akses Kasir

:::danger Penting
Kasir **TIDAK dapat**:
- Menambah produk
- Mengubah harga
- Mengedit stok
- Menghapus produk
- Import data

Semua perubahan hanya dapat dilakukan oleh **Supervisor**.
:::

---

## FAQ — Melihat Produk & Stok (Kasir)

**Q: Kenapa stok tidak bisa diubah?**  
A: Untuk menjaga keakuratan data, perubahan stok hanya boleh dilakukan oleh Supervisor.

**Q: Apakah kasir boleh melihat harga modal?**  
A: Ya, namun hanya sebagai referensi internal dan tidak dapat diubah.

**Q: Jika stok tidak sesuai, apa yang harus dilakukan?**  
A: Laporkan ke Supervisor untuk dilakukan pengecekan dan penyesuaian stok.

---

Halaman ini dibuat untuk **membantu kasir bekerja cepat** tanpa risiko kesalahan data.
