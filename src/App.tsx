"use client";
import { useState } from "react";

const YES_IMG = `${import.meta.env.BASE_URL}yes.jpg`;
const NO_IMG  = `${import.meta.env.BASE_URL}no.jpg`;

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const phrasesTR = [
    "HAYIR",
    "EMİN MİSİN",
    "ÇOK ŞEY KAÇIRIYORSUN",
    "IQ'M 160MIŞ; ÜSTÜNDE OLDUĞUNU SÖYLEMİŞ MİYDİM",
    "YABANCI HİSSE SENETLERİM SAYESİNDE ZENGİN OLMAK ÜZEREYİM",
    "ÇİÇEK ALSAM DA MI HAYIR",
    "MAHMUT ORHAN'IN HATRINA",
    "NEDEN BENİ SEVMİYORSUN",
    "DAHA NE KADAR İNATLAŞACAKSIN",
    "SANA MAKARNA YAPARIM",
    "SENİ ÇOK MUTLU EDERİM",
    "AMAN BE NASIL İSTERSEN ÖNÜNDE SONUNDA O EVETE BASACAKSIN VE BENİM OLACAKSIN",
  ];

  const getNoButtonText = () =>
    phrasesTR[Math.min(noCount, phrasesTR.length - 1)];

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center px-4">
      {yesPressed ? (
        <>
          <img
            src={YES_IMG}
            alt="Yes"
            className="max-h-[480px] md:max-h-[560px] w-auto rounded-xl object-contain"
          />
          <div className="my-4 text-4xl font-bold text-center">
            YAN YANA ÇOK GÜZELİZ SEVGİLİM SENİ HEP ŞU AN GÜLÜMSEDİĞİN GİBİ GÜLÜMSETECEĞİM
          </div>
        </>
      ) : (
        <>
          <img
            src={NO_IMG}
            alt="No"
            className="h-[320px] md:h-[420px] w-auto rounded-xl object-contain"
          />
          <h1 className="my-4 text-4xl text-center">SEVGİLİM OLUR MUSUN?</h1>
          <div className="flex items-center">
            <button
              className="mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              EVET
            </button>
            <button
              onClick={() => setNoCount((c) => c + 1)}
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
