import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Router, Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Navbar from '../components/Navigation/Navbar';

const StyledScreen = styled.div`
  width: 50%;
  margin: auto;
  color: 	#414a4c;
  padding: 50px;
  background-color: white;
`;

const StyledLabel = styled.div`
  color: grey;
  font-size: 10pt;
  margin-top: 20px;
`;

const StyledData = styled.div`
  font-size: 15pt;
  margin-top: 3px;
  padding: 2px;
  border-bottom: solid 1px #ececec;
`;

const DataDiriPegawai = () => {
  const [pegawai, setPegawai] = useState([]);
  const [noRek, setnoRek] = useState([]);

  useEffect(() => {
    axios.get('https://hris.dev.azuralabs.id/api/pegawai/2/detail', {
      headers: {"Access-Control-Allow-Origin": "http://localhost:3000"}
    })
    .then(response => {
      console.log(response.data.data);
      setPegawai(response.data.data);
      setnoRek(response.data.data.nomorRekening)
    })
  
  }, []);

  return (
    <div style={{ backgroundColor: '#ececec' }}>
      <StyledScreen>
        <Navbar />
        <div style={{ marginTop: '30px' }}>
          <h2>Data Diri</h2>

            <StyledLabel>
              Nama Lengkap
            </StyledLabel>
            <StyledData>
              { pegawai.nama }
            </StyledData>

            <StyledLabel>
              Nama Panggilan
            </StyledLabel>
            <StyledData>
              { pegawai.namaPanggilan }
            </StyledData>

            <StyledLabel>
              Tempat Lahir
            </StyledLabel>
            <StyledData>
              { pegawai.tempatLahir }
            </StyledData>

            <StyledLabel>
              Tanggal Lahir
            </StyledLabel>
            <StyledData>
              { pegawai.tanggalLahir }
            </StyledData>

            <StyledLabel>
              Jenis Kelamin
            </StyledLabel>
            <StyledData>
              { pegawai.jenisKelamin }
            </StyledData>

            <StyledLabel>
              Agama
            </StyledLabel>
            <StyledData>
              { pegawai.agama }
            </StyledData>

            <StyledLabel>
              Status Pernikahan
            </StyledLabel>
            <StyledData>
              { pegawai.statusPerkawinan}
            </StyledData>

            <StyledLabel>
              NIP
            </StyledLabel>
            <StyledData>
              { pegawai.nip }
            </StyledData>

            <StyledLabel>
              Nomor KK
            </StyledLabel>
            <StyledData>
              { pegawai.kk }
            </StyledData>

            <StyledLabel>
              Nomor KTP
            </StyledLabel>
            <StyledData>
              { pegawai.ktp }
            </StyledData>

            <StyledLabel>
              Nomor NPWP
            </StyledLabel>
            <StyledData>
              { pegawai.npwp }
            </StyledData>

            <StyledLabel>
              Nomor Kartu BPJS Kesehatan
            </StyledLabel>
            <StyledData>
              { pegawai.bpjskes }
            </StyledData>

            <StyledLabel>
              Nomor Katu BPJS Ketenagakerjaan
            </StyledLabel>
            <StyledData>
              { pegawai.bpjstk }
            </StyledData>

            {/* <StyledLabel>
              No. SIM A/B1/C
            </StyledLabel>
            <StyledData>
              { pegawai.nomorSIM }
            </StyledData> */}

            <StyledLabel>
              Golongan Darah
            </StyledLabel>
            <StyledData>
              { pegawai.golonganDarah }
            </StyledData>
{/* 
            <StyledLabel>
              Nomor Rekening
            </StyledLabel>
            <StyledData>
              {
                noRek
              }
            </StyledData> */}

            <StyledLabel>
              Nomor Rekam Medik
            </StyledLabel>
            <StyledData>
              { pegawai.nomorRekamMedik }
            </StyledData>

            <StyledLabel>
              Nomor Telepon
            </StyledLabel>
            <StyledData>
              { pegawai.phone }
            </StyledData>

            <StyledLabel>
              Provinsi
            </StyledLabel>
            <StyledData>
              { pegawai.provinsiKTP }
            </StyledData>

            <StyledLabel>
              Kota/Kabupaten
            </StyledLabel>
            <StyledData>
              { pegawai.kotaKTP }
            </StyledData>

            <StyledLabel>
              Kecamatan
            </StyledLabel>
            <StyledData>
              { pegawai.kecamatanKTP }
            </StyledData>

            <StyledLabel>
              Kelurahan
            </StyledLabel>
            <StyledData>
              { pegawai.kelurahanKTP }
            </StyledData>

            <StyledLabel>
              Alamat Lengkap
            </StyledLabel>
            <StyledData>
              { pegawai.alamatKTP }
            </StyledData>

            <StyledLabel>
              Kode Pos
            </StyledLabel>
            <StyledData>
              { pegawai.kodeposKTP }
            </StyledData>

            <StyledLabel>
              Usia
            </StyledLabel>
            <StyledData>
              { pegawai.usia }
            </StyledData>

            <StyledLabel>
              Tanggal Pensiun
            </StyledLabel>
            <StyledData>
              { pegawai.tanggalPensiun }
            </StyledData>

            <StyledLabel>
              Sisa Masa Kerja
            </StyledLabel>
            <StyledData>
              { pegawai.masaKerja }
            </StyledData>
        </div>
    </StyledScreen>
    </div>
    
  );
}

export default withRouter(DataDiriPegawai);
