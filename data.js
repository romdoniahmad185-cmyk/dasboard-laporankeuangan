// DATABASE TRANSAKSI BERDASARKAN REAL-TIME AKTIVITAS
var databaseKasJSON = {
    "modalAwal": 360000,
    "transaksi": [
        { 
          "waktu": "19 juni (07.00)", 
        "pemasukan": 0,
          "pengeluaran": 0,
           "keterangan": "Saham ditambahkan"
        },
      { "waktu": "19/06 (12.00)",
           "pemasukan": 0,
            "pengeluaran": 360000, 
              "keterangan": "Saham turun / dibelanjakan" 
       },
        
        { "waktu": "20/06 (07.00)",
          "pemasukan": 64000, 
          "pengeluaran": 0,
         "keterangan": "Grafik naik tapi merah" 
        },
     { "waktu": "20/06 (Sore)",
           "pemasukan": 0,
           "pengeluaran": 42000,
            "keterangan": "Grafik saham turun lagi"
     },
       // Tanggal 21
        { 
          "waktu": "21/06 (07.00)", 
          "pemasukan": 30000 , 
         "pengeluaran": 0,
         "keterangan": "Grafik naik tapi merah" 
        },
        { 
          "waktu": "21/06 (Sore)", "pemasukan": 0, "pengeluaran": 12000, "keterangan": "Grafik saham turun lagi"
        },
        // Tanggal 22
        { "waktu": "22/06 (07.00)", 
          "pemasukan": 54000, 
         "pengeluaran": 19000, 
          "keterangan": "Grafik naik tapi merah" },
        {
          "waktu": "22/06 (Sore)", 
        "pemasukan": 0, 
     "pengeluaran": 19500,
      "keterangan": "Grafik saham turun lagi" },
       // Tanggal 23
        {
          "waktu": "23/06 (07.00)", 
         "pemasukan": 59000 ,
        "pengeluaran": 0, 
       "keterangan": "Grafik naik tapi merah" },
        {
          "waktu": "23/06 (Sore)", "pemasukan": 0, "pengeluaran": 45000, "keterangan": "Grafik saham turun lagi"
        },
        
        // Tanggal 24
        {
          "waktu": "24/06 (07.00)", "pemasukan": 97000, "pengeluaran": 46500, "keterangan": "Grafik naik tapi merah"
        },
        { 
          "waktu": "24/06 (Sore)", "pemasukan": 0, "pengeluaran": 14000, "keterangan": "Grafik saham turun lagi"
        },
           // Tanggal 28
        { 
          "waktu": "28/06 (07.00)", "pemasukan": 100000, "pengeluaran": 25000, "keterangan": "Grafik naik tapi merah" 
        },
        { "waktu": "25/06 (Sore)", "pemasukan": 0, "pengeluaran": 68000, "keterangan": "Grafik saham turun lagi" },
         // Tanggal 29
        { "waktu": "29/06 (07.00)", "pemasukan": 54000, "pengeluaran": 45000, "keterangan": "Grafik naik tapi merah" },
        { "waktu": "29/06 (Sore)", "pemasukan": 0, "pengeluaran": 10000, "keterangan": "Grafik saham turun lagi" },
       { "waktu": "30 juni (pagi)", "pemasukan": 40000, "pengeluaran": 0, "keterangan": "Grafik saham naik lagi" },
       { "waktu": "30 juni (sore)", "pemasukan": 0, "pengeluaran": 20000, "keterangan": "Grafik saham turun lagi" },
      { "waktu": "1 juli (pagi)", "pemasukan": 56000, "pengeluaran": 48000, "keterangan": "Grafik saham naik lagi" },
        { "waktu": "1 juli (sore)", "pemasukan": 0, "pengeluaran": 20000, "keterangan": "Grafik saham turun lagi" },
       { "waktu": " 3 juli (pagi)", "pemasukan": 92000, "pengeluaran": 37000, "keterangan": "Grafik saham turun lagi" },
       { "waktu": "3 juli (sore)", "pemasukan": 0, "pengeluaran": 47500, "keterangan": "Grafik saham turun lagi" },
      {
        "waktu" : "6 juli (pagi)",
        "pemasukan": 54000,
         "pengeluaran": 34000,
        "keterangan":"tidak ada keterangan"
      },
       {
        "waktu" : "6 juli (sore)",
        "pemasukan": 0,
         "pengeluaran": 34000,
        "keterangan":"tidak ada keterangan"
      },
       {
        "waktu" : "7 juli (pagi)",
        "pemasukan": 30000,
         "pengeluaran": 34000,
        "keterangan":"tidak ada keterangan"
      },
       {
        "waktu" : "7 juli (sore)",
        "pemasukan": 50000,
         "pengeluaran": 24000,
        "keterangan":"tidak ada keterangan"
      },
       {
        "waktu" : "8 juli (pagi)",
        "pemasukan": 24000,
         "pengeluaran": 0,
        "keterangan":"tidak ada keterangan"
      },
       {
        "waktu" : "8 juli (sore)",
        "pemasukan": 0,
         "pengeluaran": 10000,
        "keterangan":"tidak ada keterangan"
      },
      {
        "waktu" : "9 juli (pagi)",
        "pemasukan": 0,
         "pengeluaran": 18000,
        "keterangan":"tidak ada keterangan"
      },
       {
        "waktu" : "9 juli (siang)",
        "pemasukan": 0,
         "pengeluaran": 25000,
        "keterangan":"tidak ada keterangan"
      },
      {
        "waktu" : "9 juli (sore)",
        "pemasukan": 0,
         "pengeluaran": 22000,
        "keterangan":"tidak ada keterangan"
      },
      {
        "waktu" : "12 juli (sore)",
        "pemasukan": 10000,
         "pengeluaran": 0,
        "keterangan":"tidak ada keterangan"
      },
        {
        "waktu" : "13 juli (07.51)",
        "pemasukan": 12000,
         "pengeluaran": 0,
        "keterangan":"tidak ada keterangan"
      },
       {
        "waktu" : "13 juli (11.08)",
        "pemasukan": 4000,
         "pengeluaran": 0,
        "keterangan":"tidak ada keterangan"
      },
       {
        "waktu" : "13 juli (11.34)",
        "pemasukan": 4000,
         "pengeluaran": 0,
        "keterangan":"tidak ada keterangan"
      },
       
        
     
]
};