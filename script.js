var chart; // Menyimpan objek grafik global

// 1. FUNGSI RENDER DATA JSON KE TABEL HTML
// 1. FUNGSI RENDER DATA JSON KE TABEL BIASA & PLAYLIST LIST VIEW

function isiTabelDariJS() {
    if (typeof databaseKasJSON === 'undefined') {
        alert("Eror: File data.js tidak terdeteksi atau belum satu folder!");
        return;
    }

    // Mengisi informasi modal awal di bagian atas
    document.getElementById('txt-modal').innerText = "Rp " + databaseKasJSON.modalAwal.toLocaleString('id-ID');
    
    var tbody = document.getElementById('body-matriks');
    var playlistContainer = document.getElementById('playlist-transaksi');
    
    // Reset konten lama
    tbody.innerHTML = ""; 
    if (playlistContainer) playlistContainer.innerHTML = ""; 

    var modalAwal = databaseKasJSON.modalAwal;
    var saldoAkumulasi = modalAwal;

    // Looping data transaksi untuk mengisi tabel biasa (statis) dan playlist
    databaseKasJSON.transaksi.forEach(function(item) {
        
        // 🟢 UBAH DI SINI: Sekarang menggunakan teks biasa (bukan elemen <input> lagi)
        tbody.innerHTML += `
            <tr>
                <td class="cell-hari">${item.waktu}</td>
                <td class="cell-pemasukan" data-value="${item.pemasukan}">Rp ${item.pemasukan.toLocaleString('id-ID')}</td>
                <td class="cell-pengeluaran" data-value="${item.pengeluaran}">Rp ${item.pengeluaran.toLocaleString('id-ID')}</td>
                <td>${item.keterangan}</td>
            </tr>
        `;

        // Kalkulasi persentase untuk playlist jika elemennya ada
        saldoAkumulasi = saldoAkumulasi + item.pemasukan - item.pengeluaran;
        var selisih = saldoAkumulasi - modalAwal;
        var persentaseSesi = modalAwal > 0 ? (selisih / modalAwal) * 100 : 0;
        
        var statusClass = selisih >= 0 ? "playlist-naik" : "playlist-turun";
        var panahIndikator = selisih >= 0 ? "🔺 +" : "🔻 ";

        if (playlistContainer) {
            playlistContainer.innerHTML += `
                <div class="playlist-item">
                    <div class="playlist-meta">
                        <span class="playlist-time">⏰ ${item.waktu}</span>
                        <span class="playlist-desc">${item.keterangan}</span>
                    </div>
                    <div class="playlist-values">
                        <span class="val-in">📥 +Rp ${item.pemasukan.toLocaleString('id-ID')}</span>
                        <span class="val-out">📤 -Rp ${item.pengeluaran.toLocaleString('id-ID')}</span>
                    </div>
                    <div class="playlist-badge ${statusClass}">
                        ${panahIndikator}${persentaseSesi.toFixed(2)}%
                    </div>
                </div>
            `;
        }
    });
}
// 2. FUNGSI PERHITUNGAN MATEMATIKA SALDO (VERSI TABEL BIASA)
function kalkulasiMatematikaSaldo() {
    var modalAwal = databaseKasJSON.modalAwal;
    var saldoSekarang = modalAwal;
    var trenSaldo = [saldoSekarang];
    var kategoriHari = ['Mulai'];
    
    var baris = document.querySelectorAll('#body-matriks tr');
    
    baris.forEach(function(tr) {
        // 🟢 Mengambil data dari text/atribut data-value (bukan .value input)
        var waktu = tr.querySelector('.cell-hari').innerText;
        var pemasukan = Number(tr.querySelector('.cell-pemasukan').getAttribute('data-value'));
        var pengeluaran = Number(tr.querySelector('.cell-pengeluaran').getAttribute('data-value'));

        saldoSekarang = saldoSekarang + pemasukan - pengeluaran;
        
        trenSaldo.push(saldoSekarang);
        kategoriHari.push(waktu); 
    });

    var selisihSaldo = saldoSekarang - modalAwal; 
    var persentase = modalAwal > 0 ? (selisihSaldo / modalAwal) * 100 : 0;
    var teksPersentase = Math.abs(persentase).toFixed(2) + "%";

    var txtProfit = document.getElementById('txt-profit-bersih');
    var badgeProfit = document.getElementById('badge-profit');
    
    var tandaNominal = selisihSaldo >= 0 ? " (+ Rp " : " (- Rp ";
    var teksTampilanUtama = "Rp " + saldoSekarang.toLocaleString('id-ID') + 
                            "<span style='font-size: 15px; font-weight: normal; margin-left: 8px;'>" + 
                            tandaNominal + Math.abs(selisihSaldo).toLocaleString('id-ID') + ")" + 
                            "</span>";
    
    if(txtProfit) txtProfit.innerHTML = teksTampilanUtama;
    
    if (badgeProfit) {
        if (selisihSaldo >= 0) {
            txtProfit.style.color = "#10b981"; 
            badgeProfit.innerText = "📈 Tren Naik (" + teksPersentase + ")";
            badgeProfit.className = "status-badge status-naik";
        } else {
            txtProfit.style.color = "#f43f5e"; 
            badgeProfit.innerText = "📉 Tren Turun (-" + teksPersentase + ")";
            badgeProfit.className = "status-badge status-turun";
        }
    }

    return { saldo: trenSaldo, hari: kategoriHari };
}
// 3. FUNGSI UTAMA MEMBUAT GRAFIK PERTAMA KALI
function jalankanAplikasi() {
    isiTabelDariJS(); 
    var dataGrafik = kalkulasiMatematikaSaldo(); 

    var nilaiTertinggi = Math.max(...dataGrafik.saldo);
    var batasAtasGrafik = nilaiTertinggi > 1000000 ? nilaiTertinggi : 1000000;

    var options = {
        series: [{ name: "Saldo Kas/Saham", data: dataGrafik.saldo }],
       // Cari variabel options di fungsi jalankanAplikasi(), lalu sesuaikan bagian ini:
        chart: { 
            height: 550,
            width:600,
            type: 'area', 
            
            foreColor: '#94a3b8', 
            touchAction: 'pan-y', 
            
            // 🟢 Menghapus jarak aman (padding) bawaan grafik di kiri dan kanan
            margin :{right:-10000,},
            
            toolbar: { 
                show: true,
                tools: { download: false, selection: true, zoom: true, zoomin: true, zoomout: true, pan: true, reset: true },
                autoSelected: 'pan'
            },
            zoom: { enabled: true, type: 'x', autoScaleYaxis: true },
            animations: { enabled: true }
        },
      
    
      dataLabels: {
            enabled: false
        },
      stroke: {
            curve: 'smooth', // Membuat garis area melengkung halus
            width: 3 ,        // Ketebalan garis utama grafik area
         
        },
        grid: { 
           borderColor: '#334155',
          //borderColor : '#fbbf24',
            xaxis: { lines: { show: true } }, 
            yaxis: { lines: { show: true } },
            // 🟢 Merapatkan kotak grid latar belakang ke pinggiran pembungkus
          
        },
        xaxis: { 
            type: 'category',
            categories: dataGrafik.hari,
            
            // 🟢 KUNCI UTAMA: Memaksa titik data pas dimulai tepat dari garis tepi sumbu X
            tickPlacement: 'on', 
            
            tooltip: { enabled: false },
            labels: { style: { fontSize: '10px', colors: '#94a3b8' } }
        }, 
        // --- 📊 PENGATURAN FONT SUMBU Y ---
        yaxis: {
            min: 0,
            max: batasAtasGrafik, 
            tickAmount: 10, 
            labels: {
                style: {
                    fontSize: '7px', // Ukuran huruf diperkecil menjadi 10px
                   colors: '#94a3b8'
                },
                formatter: function (val) {
                    return "Rp " + Math.round(val).toLocaleString('id-ID');
                }
            }
        },
        tooltip: { theme: 'dark' }
    };

    chart = new ApexCharts(document.querySelector("#chart-garis-modal"), options);
    chart.render();
}

// 4. FUNGSI TOMBOL HITUNG ULANG FORM
function hitungUlangForm() {
    var dataTerbaru = kalkulasiMatematikaSaldo();
    
    var nilaiTertinggi = Math.max(...dataTerbaru.saldo);
    var batasAtasGrafik = nilaiTertinggi > 1000000 ? nilaiTertinggi : 1000000;

    // Pastikan di updateOptions juga disamakan ukuran font-nya agar tidak balik membesar saat dihitung ulang
    chart.updateOptions({ 
        xaxis: { 
            categories: dataTerbaru.hari,
            labels: { style: { fontSize: '0.1px' } }
        },
        yaxis: { 
            min: 0, 
            max: batasAtasGrafik, 
            tickAmount: 10,
            labels: { style: { fontSize: '0.1px'} }
        }
    });
    chart.updateSeries([{ data: dataTerbaru.saldo }]);
}

// Menjalankan aplikasi saat halaman siap
window.onload = jalankanAplikasi;