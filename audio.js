const englishAudioFiles = [
  "https://drive.google.com/uc?export=download&id=11mPIO5Zvp0doU857eADgc8AChKLP3l_t",
  "https://drive.google.com/uc?export=download&id=1NTAyEqD5rMDPYUYf-RYh0Zkm1ApcC1gx",
  "https://drive.google.com/uc?export=download&id=12ZU_s0ZACc4VjVgcI5gK1NNtYpWO1rEL",
  "https://drive.google.com/uc?export=download&id=1vr1Ab17QcG7tJDNhTvpN9yGrC5_HMbW7",
  "https://drive.google.com/uc?export=download&id=1lADkEItNoFXxrGWO2Ue5fYukb2Mml9gr",
  "https://drive.google.com/uc?export=download&id=1xxDVkwf1U46mhEZWJtt8mHNY_MtdQhpY",
  "https://drive.google.com/uc?export=download&id=1Do0iBweX1gNh9YGEpOSE9RybE1WHXtAz",
  "https://drive.google.com/uc?export=download&id=10KgpC44xJ0nGytST500OKg4vrl0StDU4",
  "https://drive.google.com/uc?export=download&id=1CxDAYEPpjd32KgzW4vKrh_6XRzNkhmGU",
  "https://drive.google.com/uc?export=download&id=1cEc5HMKh8EbdBXU4jnnxrXcpDcMUtFZN",
  "https://drive.google.com/uc?export=download&id=11Pjncfx0KFaIYnlR5eFGAl89OjjFIg6F",
  "https://drive.google.com/uc?export=download&id=1JR6g_URGOQqaV7nr0N6uS6cjonzqvkYj",
  "https://drive.google.com/uc?export=download&id=1DmZmIqo-Fj9uIwjHx1Ot1RkuQmJPSR9-",
  "https://drive.google.com/uc?export=download&id=1TDQjimaYftCv-v_fEJOHhYYlcmZF_XlT",
  "https://drive.google.com/uc?export=download&id=1WPo-2WwWZgTpWu7kmo5fdMW7ZD7jUCo7",
  "https://drive.google.com/uc?export=download&id=1gkBLZPcmNqgCc8eAWTk2_889TIkmfYIt",
  "https://drive.google.com/uc?export=download&id=1gIkhtyo4I8rPmU_qdecaqPEfLbQamWeY",
  "https://drive.google.com/uc?export=download&id=16Hl_cvwHvoDeYEvoEZPuW7MW0wW2YeOs",
  "https://drive.google.com/uc?export=download&id=167aAnoOlmoBfYgk0jvVs6-EYOv4iHkJT",
  "https://drive.google.com/uc?export=download&id=12Eesn7njxCJNZiIfxOVgduN_iEbZAxx9",
  "https://drive.google.com/uc?export=download&id=1QGBs5pQ4KK0fiwVw8hJ7j8qTSPP53f9u",
  "https://drive.google.com/uc?export=download&id=1zRStuTmGIfa4DqgAf4dvREhpxrzSk1kC",
  "https://drive.google.com/uc?export=download&id=1fRjhBJYhr6lr1LgzdwakfpjgawYd7fYh",
  "https://drive.google.com/uc?export=download&id=1n-HegY3G-rIBvvqJ72RY6HeoX2jZlFN0",
  "https://drive.google.com/uc?export=download&id=1Ah_wQ3Q2vCDgHHXhm-K62ngAh1R6Rjl4",
  "https://drive.google.com/uc?export=download&id=1mX8qrQrNhZU8SrHY1f2GDvl8mnjmhlb7",
  "https://drive.google.com/uc?export=download&id=1jP-u9T8y_olcCqkYb0izIbaR5sgYQJ1J",
  "https://drive.google.com/uc?export=download&id=1T-THNd-aafJYbK6MXwyAyd4ETHuJgR9h",
  "https://drive.google.com/uc?export=download&id=1kwyQRh1rv_6YD_2ycfPKj-Tsm0hbO6Sn",
  "https://drive.google.com/uc?export=download&id=1v_N8eHqH04g1R3wohUgAungYY4XC8Z1p",
  "https://drive.google.com/uc?export=download&id=1f7bzTkccEphfZZych27HlXAum9XvU9_Y",
  "https://drive.google.com/uc?export=download&id=1Rih9ukcXU2ZEB6ZTChD9Ych5OsVXEfj-",
  "https://drive.google.com/uc?export=download&id=1uYqeblK1gDKYom0E4alEYITWqMrinIiW",
  "https://drive.google.com/uc?export=download&id=1mWme0wJYuNPmxlOHIc_JLZVAsBtrfbnM",
  "https://drive.google.com/uc?export=download&id=1GZQ8zrKmZccXFQCLlNrXYgUeSK14in44",
  "https://drive.google.com/uc?export=download&id=1V_x5I42Caox8iab8pxnsKnH9iBtttf-A",
  "https://drive.google.com/uc?export=download&id=1c5iYwQZRfxlBDojprRd8p4WfHCuaDeQ7",
  "https://drive.google.com/uc?export=download&id=1OTui-_IKwv3cBEfRrQUjTeFP4sleJeYM",
  "https://drive.google.com/uc?export=download&id=1Eo1pS7JPX1FGKpx4qgFSJ5DfZ3zxs-J_",
  "https://drive.google.com/uc?export=download&id=1MI_ldSx7CVtjjzyvozG_y1XBsDmvmDvF",
  "https://drive.google.com/uc?export=download&id=1nretj24EB-T4MEBCDdxW24ZV3EE6Q3EJ",
  "https://drive.google.com/uc?export=download&id=1ZFJiwYmCMpOIfvCEgw4Ab0dDcH5Ms_n-",
  "https://drive.google.com/uc?export=download&id=15WljnpClpJ6-RG97svRqcnfW6XXsvF8h",
  "https://drive.google.com/uc?export=download&id=15TfQKjUVmdbG077S4ZbFEMJgieVHe0VR",
  "https://drive.google.com/uc?export=download&id=1igfu4impoxxoPL_ZYQiw2RaOxrK4oSZb",
  "https://drive.google.com/uc?export=download&id=1OqXGq3RhXP1dk-eIUTU8G-RupCb23HfV",
  "https://drive.google.com/uc?export=download&id=1oc1wzuKzEqonkrQrXM0fXa-VZFGsxjxb",
  "https://drive.google.com/uc?export=download&id=16Nu9iEsnJ0vAXfzIobuAEQdPgsdyiuEx",
  "https://drive.google.com/uc?export=download&id=1x7auNhHQOYgKJPMVgIQv-HGcYD3a7Kl1",
  "https://drive.google.com/uc?export=download&id=1vC1VHH1f8JW9YIeuoiDn_B2vys8mysil"
];
// Additional English audio files
englishAudioFiles.push(
  "https://drive.google.com/uc?export=download&id=1t6AFq8N4Wgyd1T0ubTixn5Aak7IFV5tI",
  "https://drive.google.com/uc?export=download&id=1bL8JQgh6HmUqVCR8EHkLw0Mm45GmpMaK",
  "https://drive.google.com/uc?export=download&id=1GToYeE0ANsew3tmgNazgy1BhoRg4g0EJ",
  "https://drive.google.com/uc?export=download&id=11507Mb0RtWTl0ukRmPQkQ22TnjWmiR5u",
  "https://drive.google.com/uc?export=download&id=13WzWC4G1LQrJ1rh3nn27sElkMmOYxKsi",
  "https://drive.google.com/uc?export=download&id=1Iws__lApHhaDBgQN31r4veQw2Mxwi1WK",
  "https://drive.google.com/uc?export=download&id=1pO40wNvz8PeqyZQTOiqazYzcarVXDiF8",
  "https://drive.google.com/uc?export=download&id=14SsRqYuZxVR5bsSPgGZU-rCLK-8AB5ze",
  "https://drive.google.com/uc?export=download&id=1Xf80qwdE7JVepwXBfejV9jrx9Eau1E_I",
  "https://drive.google.com/uc?export=download&id=1OVLmDa8Ul_aXybZSUSHmVPYMPdKdZei0",
  "https://drive.google.com/uc?export=download&id=1V8HgS4--DlMRzWFMQ7CmRXebX2zpoTSq",
  "https://drive.google.com/uc?export=download&id=1dWOsY9MD7jqI_cRPACHC60aTSpgAkRty",
  "https://drive.google.com/uc?export=download&id=1CaSO50setPd-Wq0oPgW37UgfHk9UNFlj",
  "https://drive.google.com/uc?export=download&id=1yxLX2Agsg3fdVeQ9sk2pwi41yjZWlDMH",
  "https://drive.google.com/uc?export=download&id=1UxZrzV0m3AOZDG2-UduPYdzivXNlNkhD",
  "https://drive.google.com/uc?export=download&id=1Zi688hcLvpOUnVIEMLVHViizvNJcK8MH",
  "https://drive.google.com/uc?export=download&id=1V1CnotlYjeYGE8nxB48lDnX8Q0_0Yp2L",
  "https://drive.google.com/uc?export=download&id=1hIQgicBxnH30PzLGLxL7fUh1sL1aJMsn",
  "https://drive.google.com/uc?export=download&id=1OoDcVjZaYg1xZeyIH-rBM_T0K_4X3K0V",
  "https://drive.google.com/uc?export=download&id=1wWpvuGBLMnBg42su2O3pdfZ3g1j49WxV",
  "https://drive.google.com/uc?export=download&id=1Popou1jTL_7LDz59NNl2-bd6TUVTCNGr",
  "https://drive.google.com/uc?export=download&id=1I9_LXvk6B4JQB94o98gRo5x-yAozn9sm",
  "https://drive.google.com/uc?export=download&id=1stSZcFiVVWkJW2K4QNp0H7FcTrDbxGOn",
  "https://drive.google.com/uc?export=download&id=1IFILv0_HkU6D_3LRmzt69RZmatcZrimU",
  "https://drive.google.com/uc?export=download&id=1IzHqV_eZhCMa2Ks8uKnfaCLWLeKPMurH",
  "https://drive.google.com/uc?export=download&id=1qYcnHydP3AF8r8tdjMxWoALtSPxtlUsO",
  "https://drive.google.com/uc?export=download&id=1IC5mioQhDWm3VxLrS9gqFAJaR0vWkhS4",
  "https://drive.google.com/uc?export=download&id=1zjOPfmKCYFsbq3fX2hXBG1b9NxMNfg_c",
  "https://drive.google.com/uc?export=download&id=1tzsCVx7ijgD50qkRF1KCvExIba3jggSe",
  "https://drive.google.com/uc?export=download&id=1mKoSe9Kr_p4SgMKANf3e5i6blGLRYfTm",
  "https://drive.google.com/uc?export=download&id=1UPLZdFsA8b0CDQMXe0Yyn2oNP9pj-RMT",
  "https://drive.google.com/uc?export=download&id=1SrbO2XcLtE-sWo1tVPC9QN0zPt_Xv5PO",
  "https://drive.google.com/uc?export=download&id=1XT4-dDGB4q25pTvOJxMXJx8CAunB-WRZ",
  "https://drive.google.com/uc?export=download&id=13Bd9pSni_pEVfLsfpahMC90_44MuhWVE",
  "https://drive.google.com/uc?export=download&id=1fgOuLn4dyQ1NgF92ATtrQdErxLkcRaik",
  "https://drive.google.com/uc?export=download&id=1u4bNx4hu1I7tD34M-yeJ0fklBMHMoGgy",
  "https://drive.google.com/uc?export=download&id=1ozdtl5P158K-_wH7dq716UMv8c1KjOZI",
  "https://drive.google.com/uc?export=download&id=1QezyvqShRuK0ecOtPQIumkGSM4XgHi60",
  "https://drive.google.com/uc?export=download&id=1-LMhGFVBBYSCsxxlP-Y6srksrhlR4fMY",
  "https://drive.google.com/uc?export=download&id=1cimo5LcJwuGh_B8C3ZDZUFsateweWSvO",
  "https://drive.google.com/uc?export=download&id=196fY5CSLJgykuqprJdeqny0ewP2en3Oq",
  "https://drive.google.com/uc?export=download&id=1ROOEwlFesl3BOB2gEJ35oEe7fOxl-3G4",
  "https://drive.google.com/uc?export=download&id=1Lepz_OCc2YB9UMYrsklQYRHMKK0dfdnb",
  "https://drive.google.com/uc?export=download&id=1JPSWQMLVM54mspFgEx8fmM9nrS3w_saI",
  "https://drive.google.com/uc?export=download&id=1pt67L6W1c1eh2U67N1vB8s0jz1Ujw1IZ",
  "https://drive.google.com/uc?export=download&id=1YkohPiWh5yzs2z_16Ri7UP0pPYnfLsyN",
  "https://drive.google.com/uc?export=download&id=1fjWEM1F20iS_DDHQJw9xahPivcLH6b83",
  "https://drive.google.com/uc?export=download&id=16mIWWhGBhhcE9jvHPPyXZ6DdK3x3dVQX",
  "https://drive.google.com/uc?export=download&id=1ZzZbN9-XCvYVpp7XRQ2wl-bWn6xaHNxG",
  "https://drive.google.com/uc?export=download&id=1FUAnUhmzBWIoaW21h0WQ-UewgAF49qov"
);
const audioFiles = [
  "audio/SQDE001.mp3",
  "audio/SQDE002.mp3",
  "audio/SQDE003.mp3",
  "audio/SQDE004.mp3",
  "audio/SQDE005.mp3",
  "audio/SQDE006.mp3",
  "audio/SQDE007.mp3",
  "audio/SQDE008.mp3",
  "audio/SQDE009.mp3",
  "audio/SQDE010.mp3",
  "audio/SQDE011.mp3",
  "audio/SQDE012.mp3",
  "audio/SQDE013.mp3",
  "audio/SQDE014.mp3",
  "audio/SQDE015.mp3",
  "audio/SQDE016.mp3",
  "audio/SQDE017.mp3",
  "audio/SQDE018.mp3",
  "audio/SQDE019.mp3",
  "audio/SQDE020.mp3",
  "audio/SQDE021.mp3",
  "audio/SQDE022.mp3",
  "audio/SQDE023.mp3",
  "audio/SQDE024.mp3",
  "audio/SQDE025.mp3",
  "audio/SQDE026.mp3",
  "audio/SQDE027.mp3",
  "audio/SQDE028.mp3",
  "audio/SQDE029.mp3",
  "audio/SQDE030.mp3",
  "audio/SQDE031.mp3",
  "audio/SQDE032.mp3",
  "audio/SQDE033.mp3",
  "audio/SQDE034.mp3",
  "audio/SQDE035.mp3",
  "audio/SQDE036.mp3",
  "audio/SQDE037.mp3",
  "audio/SQDE038.mp3",
  "audio/SQDE039.mp3",
  "audio/SQDE040.mp3",
  "audio/SQDE041.mp3",
  "audio/SQDE042.mp3",
  "audio/SQDE043.mp3",
  "audio/SQDE044.mp3",
  "audio/SQDE045.mp3",
  "audio/SQDE046.mp3",
  "audio/SQDE047.mp3",
  "audio/SQDE048.mp3",
  "audio/SQDE049.mp3",
  "audio/SQDE050.mp3",
  "audio/SQDE051.mp3",
  "audio/SQDE052.mp3",
  "audio/SQDE053.mp3",
  "audio/SQDE054.mp3",
  "audio/SQDE055.mp3",
  "audio/SQDE056.mp3",
  "audio/SQDE057.mp3",
  "audio/SQDE058.mp3",
  "audio/SQDE059.mp3",
  "audio/SQDE060.mp3",
  "audio/SQDE061.mp3",
  "audio/SQDE062.mp3",
  "audio/SQDE063.mp3",
  "audio/SQDE064.mp3",
  "audio/SQDE065.mp3",
  "audio/SQDE066.mp3",
  "audio/SQDE067.mp3",
  "audio/SQDE068.mp3",
  "audio/SQDE069.mp3",
  "audio/SQDE070.mp3",
  "audio/SQDE071.mp3",
  "audio/SQDE072.mp3",
  "audio/SQDE073.mp3",
  "audio/SQDE074.mp3",
  "audio/SQDE075.mp3",
  "audio/SQDE076.mp3",
  "audio/SQDE077.mp3",
  "audio/SQDE078.mp3",
  "audio/SQDE079.mp3",
  "audio/SQDE080.mp3",
  "audio/SQDE081.mp3",
  "audio/SQDE082.mp3",
  "audio/SQDE083.mp3",
  "audio/SQDE084.mp3",
  "audio/SQDE085.mp3",
  "audio/SQDE086.mp3",
  "audio/SQDE087.mp3",
  "audio/SQDE088.mp3",
  "audio/SQDE089.mp3",
  "audio/SQDE090.mp3",
  "audio/SQDE091.mp3",
  "audio/SQDE092.mp3",
  "audio/SQDE093.mp3",
  "audio/SQDE094.mp3",
  "audio/SQDE095.mp3",
  "audio/SQDE096.mp3",
  "audio/SQDE097.mp3",
  "audio/SQDE098.mp3",
  "audio/SQDE099.mp3",
  "audio/SQDE100.mp3"
];
const shqipAudioFiles = [
  "https://drive.google.com/uc?export=download&id=1-b8k-tlJOwmp6rA1penmIzGZon2mTDn2",
  "https://drive.google.com/uc?export=download&id=10T9ylOUAY_7VYorC1pqfq3_yWvRA0u78",
  "https://drive.google.com/uc?export=download&id=10iY3d9CsCLbhYaMsxhj3X0fQ-X06CHst",
  "https://drive.google.com/uc?export=download&id=11t1mDkkI3dk15X7afFgKnnIi8O4oI6s7",
  "https://drive.google.com/uc?export=download&id=12bI52e4yReqcBBfyhaha4lfK2P1qk51m",
  "https://drive.google.com/uc?export=download&id=12fu-8vhAjRvZMdyQ8hmMzQVq9cCJcDzR",
  "https://drive.google.com/uc?export=download&id=13FZyhxkLp0sCLM1KOHvzp90rdckmBfLd",
  "https://drive.google.com/uc?export=download&id=13OghVQIuV1NM-RTAaVNgiA3M7eUfU2D6",
  "https://drive.google.com/uc?export=download&id=16QZde6M9tHaDdvG-HlUGRWmT_U7ruXb3",
  "https://drive.google.com/uc?export=download&id=16egJD_QKOKKSIFql_fLonKVBOSVgFdY1",
  "https://drive.google.com/uc?export=download&id=18fATJ8x7QB3STTK1feEYj18tYOAZ9AR6",
  "https://drive.google.com/uc?export=download&id=18ovDMzL5x9rO39lTaUHkrW2Cfz1xEhyT",
  "https://drive.google.com/uc?export=download&id=18ydk8-nzsxtlGMvF29KnY6OEfk0Hlesd",
  "https://drive.google.com/uc?export=download&id=19-KYOVVbmHi896xJzt5rXe6ezzj2lF5i",
  "https://drive.google.com/uc?export=download&id=193ipQFWj3saRGFkp0nyXHXdkIak24CbB",
  "https://drive.google.com/uc?export=download&id=19nagUiTLLY8-AHRRBF6AEHI8AE4PdRvi",
  "https://drive.google.com/uc?export=download&id=19tNv1pJGI_U1__GFKMGIcNg7k-NS6vRd",
  "https://drive.google.com/uc?export=download&id=1AE_Q-DLPbHBkRMIs8gx8deASpVgoo4S_",
  "https://drive.google.com/uc?export=download&id=1AYy5_L-Tn48u46iy6x48boztcq_mejXr",
  "https://drive.google.com/uc?export=download&id=1ArVq-gS0mER6NZY9j1NBVO6Bu8eUuW0K",
  "https://drive.google.com/uc?export=download&id=1B1ue_1B8KiJi-qwrPinTfnD36-wnrO2A",
  "https://drive.google.com/uc?export=download&id=1B91Vs8OnSPwKIEw83NSr1ad_NqRxMuAl",
  "https://drive.google.com/uc?export=download&id=1BYeSD6W5UXxXdmzw5VymOYih2MOS5uLs",
  "https://drive.google.com/uc?export=download&id=1BvENFY78t-9KvqivbckONtXQjZd4jQal",
  "https://drive.google.com/uc?export=download&id=1DJozxGBoLJqcedZBZSOp0LVqqwLb8U45",
  "https://drive.google.com/uc?export=download&id=1DRoI6SbmZjN-SNG2L70c4etRyPsMzYD3",
  "https://drive.google.com/uc?export=download&id=1DmKwkjAVYkKy59vQRJnj9XSAo2mmDQ1x",
  "https://drive.google.com/uc?export=download&id=1F8W41Ky37yyVkfkpTSWlqHJDm_oPNAUu",
  "https://drive.google.com/uc?export=download&id=1FEViteyYgKrJ1WpsPZuURV93ObNFLIQ6",
  "https://drive.google.com/uc?export=download&id=1FRRT5coHIew0-fwz3nfPCz5pHckdgpEi",
  "https://drive.google.com/uc?export=download&id=1FynJFzLuu8auNtCphDHW66TyBsm_V02l",
  "https://drive.google.com/uc?export=download&id=1G1K9YWvFmj2ZvAOLMuZFLGWfSANiKtUt",
  "https://drive.google.com/uc?export=download&id=1GMcI9nRB0fC3Z-hNIVigM0YjpgDmpsTV",
  "https://drive.google.com/uc?export=download&id=1GQ3vvXP5048ujM96YjZASpeekcuJoBi3",
  "https://drive.google.com/uc?export=download&id=1I6HPa9CUpvfZKhyQqvisr1qlg5mCtDBX",
  "https://drive.google.com/uc?export=download&id=1ITxkXD4uCJh9LX3QiXJCXWTj2A-DdnNf",
  "https://drive.google.com/uc?export=download&id=1J5S_kvFCK3c964TvvXu89P6j_LVNzm3-",
  "https://drive.google.com/uc?export=download&id=1JAVbj_CjVlGzFt7PyLh0sls_Yb4d9_8l",
  "https://drive.google.com/uc?export=download&id=1K86BLTyh7KeHkZoIj9ySa718hLyUW5gK",
  "https://drive.google.com/uc?export=download&id=1K8eg4r1GgYUsYkrkUJ1WydthSEgltCFX",
  "https://drive.google.com/uc?export=download&id=1Kg7IsX_0ROjW8RFcle6gtLa9R0aMcbGK",
  "https://drive.google.com/uc?export=download&id=1KuqTs-WRfTvYK5N_3BuClLozqB_3EY-8",
  "https://drive.google.com/uc?export=download&id=1LFvH4P1SexnNU4v598ieMgidd5qazqkb",
  "https://drive.google.com/uc?export=download&id=1LaqmzHnQvvN3DCzZGMTbAoew2qU8r8hS",
  "https://drive.google.com/uc?export=download&id=1LwVgIGUvlYiNlo43XscMj8fFecm3wtMl",
  "https://drive.google.com/uc?export=download&id=1MO3SLARP-rO4DLmsGdD01ror59cQ_y1b",
  "https://drive.google.com/uc?export=download&id=1MYtrK2R0uqBDeg0opKT-G0KvbeJhHhqN",
  "https://drive.google.com/uc?export=download&id=1N_CRaninTf1aGr9oxIHmTP_m27oSqErz",
  "https://drive.google.com/uc?export=download&id=1O6GwFxgSmEPT0U5AEkCr_tn1tHc0hDWj",
  "https://drive.google.com/uc?export=download&id=1Obx4Pk6Gg_2zrhwpV0TxeB8oagBP2ovF",
  "https://drive.google.com/uc?export=download&id=1P9kdv3pFXbzmjxEI4QgE-mDpEC19SlGl",
  "https://drive.google.com/uc?export=download&id=1PFUnGpcogSdnTllJt2tALFumZrcDmBFp",
  "https://drive.google.com/uc?export=download&id=1PWY1yF2fMVPofqS92foe87MoKk35IpWK",
  "https://drive.google.com/uc?export=download&id=1Pmkzik4uqbIQo6MM8A63aefqnrBppFx1",
  "https://drive.google.com/uc?export=download&id=1R4QQPYLeg5DEc2SsP8lOTBeG1sWqVenO",
  "https://drive.google.com/uc?export=download&id=1RAA2J4Yg2YLNPdJNM2J7I9-edig0oGYU",
  "https://drive.google.com/uc?export=download&id=1SgxvJSpTa3VYGTS1FBeC5C1heZtiC_QK",
  "https://drive.google.com/uc?export=download&id=1TkOXP4BU0NEpozHu6ZPHECAQlQjKRBFv",
  "https://drive.google.com/uc?export=download&id=1UTuuZF5yxWXq6Vr9YtIAbLkf7K6WhvKR",
  "https://drive.google.com/uc?export=download&id=1UwBd7Oh3eUH8CaYHBfTFYgnTP-zfu1jC",
  "https://drive.google.com/uc?export=download&id=1UyLpP-ZNkqNNQDHEhkG8xs5UiCOl-2S2",
  "https://drive.google.com/uc?export=download&id=1VJBKcqF6LBtWnM3RVAQ5YJVtpR_9-yeT",
  "https://drive.google.com/uc?export=download&id=1W0mApZyxpSA1UnWMcTWt42NWnIr0Fr3P",
  "https://drive.google.com/uc?export=download&id=1WG_J5nUs0Jyl3t9nCuQy3p8u0m-wwT5V",
  "https://drive.google.com/uc?export=download&id=1WnQYHoV24Ldimfw8IB6GOo5a7GdQWUIb",
  "https://drive.google.com/uc?export=download&id=1X-WNLGu0la_EIkoHom2PYc59BphStgB8",
  "https://drive.google.com/uc?export=download&id=1YwiKps0NWy2djJAnCQNjdFI0P0OT3eCm",
  "https://drive.google.com/uc?export=download&id=1ZLL3r0N_3OMjwi03bAm2I7BgEZSI73P0",
  "https://drive.google.com/uc?export=download&id=1Z_3dq7BovZrmiY0VZrYtzPzAWclCw927",
  "https://drive.google.com/uc?export=download&id=1_xSYKO70roaFOip16uhv0aPQ3dR2c2tW",
  "https://drive.google.com/uc?export=download&id=1a7OeeSy3YrHB8nStGAy08HA8RvO0OUTR",
  "https://drive.google.com/uc?export=download&id=1ag1vvAk8zNwSapo7gOLPy11LY44sEYRu",
  "https://drive.google.com/uc?export=download&id=1bNuJnkqpW1Um45FzZxAmc5jTXK21ZOUu",
  "https://drive.google.com/uc?export=download&id=1bUQu-A4YZ4c9SjMxhd9oTJToEujB2nYZ",
  "https://drive.google.com/uc?export=download&id=1bkVt78pn9vuqNwzP3P3es0OwaJjN48l9",
  "https://drive.google.com/uc?export=download&id=1bqu1nFLVeEp_2CXMfNq7tak3pO7A_IG-",
  "https://drive.google.com/uc?export=download&id=1eDDDbcS5tcDaG3oJenoBDqpaPbcCxJva",
  "https://drive.google.com/uc?export=download&id=1eNvH_a7yJ9kVt368S0FDeRxUdHfFcCrT",
  "https://drive.google.com/uc?export=download&id=1h5g--dretqmN0_qbgH_W1fuLVxzC8KwH",
  "https://drive.google.com/uc?export=download&id=1iykpH_CyCjcQtC7Mg3KspZ6_nriKDMJx",
  "https://drive.google.com/uc?export=download&id=1j29XnR-bl8IN3w-cwpd4IHTICWBV41IA",
  "https://drive.google.com/uc?export=download&id=1jIaJ3JKHtSDR2tzrGe0hiHXzIG49Mfbw",
  "https://drive.google.com/uc?export=download&id=1jn8AzJwEKpLKxWTOKBC4__ch7xuX1aFH",
  "https://drive.google.com/uc?export=download&id=1lChsHhyCp4FjSJVka6aZC7p74anRuCRu",
  "https://drive.google.com/uc?export=download&id=1oRvKVvc3QZQxjefHq2qFf-MDHyHw8BoQ",
  "https://drive.google.com/uc?export=download&id=1opMk1cQQMOFeObh_6fYK6W71S78q4fOd",
  "https://drive.google.com/uc?export=download&id=1pARoE8ppq9e1M4eO3ANURUEKyMdvkUCs",
  "https://drive.google.com/uc?export=download&id=1pW7MuAy4uhdSEm_Jg8AbSAb-kUTYkscw",
  "https://drive.google.com/uc?export=download&id=1pXECTjTOmHBXcpB_t5ma3SpOToyAcYnj",
  "https://drive.google.com/uc?export=download&id=1pcJSaT7HedkbzgTFnj1UyMM-CLD-MVCA",
  "https://drive.google.com/uc?export=download&id=1qLfWJ4IHlYXmuHXDEMCPpWpsOznPRdIm",
  "https://drive.google.com/uc?export=download&id=1qZ4gisu0AdtgJlGhfFhMV5iczXCaoMpY",
  "https://drive.google.com/uc?export=download&id=1rn12JWwg7iyz8nHtSWRnX5djCDDFy_t9",
  "https://drive.google.com/uc?export=download&id=1suRmd6XpMcUb6ACpZ35QFFsj9-cGLDWl",
  "https://drive.google.com/uc?export=download&id=1t-xWjgMT7lyMeNMRnKyEb8NHULl82pUO",
  "https://drive.google.com/uc?export=download&id=1v920Y0xR60KLgp8L_xbg8dTgg-h3YUjS",
  "https://drive.google.com/uc?export=download&id=1vVRYm2s_YT-0aLGUAgFdSgcOyPSmSV4U",
  "https://drive.google.com/uc?export=download&id=1y0lS1bC7hmJC3KA03c0lwqDeODNCf5Hk",
  "https://drive.google.com/uc?export=download&id=1yGDBjILh7gQ3_CLlLfXnN29p4MjgQM8B",
  "https://drive.google.com/uc?export=download&id=1zIz0th788cnS2QZeNEQvqPjbZLlIiVHM"
];
// Now you can use shqipAudioFiles[0], shqipAudioFiles[1], etc. in your code

// Shfaq të gjitha linqet audio në ekran për testim të shpejtë
function showAllAudioLinks() {
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100vw';
  container.style.maxHeight = '60vh';
  container.style.overflowY = 'auto';
  container.style.background = 'rgba(255,255,255,0.98)';
  container.style.zIndex = '9999';
  container.style.padding = '10px';
  container.style.fontSize = '14px';
  container.style.borderBottom = '2px solid #333';
  container.innerHTML = '<b>Testo të gjitha linqet audio (klikoni për të luajtur):</b><br><br>';

  // English audio
  englishAudioFiles.forEach((url, i) => {
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.textContent = `EN #${i+1}`;
    a.style.marginRight = '8px';
    a.onclick = function(e) {
      e.preventDefault();
      const audio = new Audio(url);
      audio.play();
    };
    container.appendChild(a);
    if ((i+1)%10 === 0) container.appendChild(document.createElement('br'));
  });
  container.appendChild(document.createElement('br'));

  // Shqip audio
  shqipAudioFiles.forEach((url, i) => {
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.textContent = `SQ #${i+1}`;
    a.style.marginRight = '8px';
    a.onclick = function(e) {
      e.preventDefault();
      const audio = new Audio(url);
      audio.play();
    };
    container.appendChild(a);
    if ((i+1)%10 === 0) container.appendChild(document.createElement('br'));
  });

  // Buton për mbyllje
  const closeBtn = document.createElement('button');
  closeBtn.textContent = 'Mbyll';
  closeBtn.style.margin = '10px';
  closeBtn.onclick = () => container.remove();
  container.appendChild(document.createElement('br'));
  container.appendChild(closeBtn);

  document.body.appendChild(container);
}

// E thërrasim automatikisht kur ngarkohet faqja
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', showAllAudioLinks);
}