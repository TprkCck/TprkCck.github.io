import { useEffect, useState } from "react";

/* ---------------- ARKA PLAN FOTOĞRAF SLIDERI ---------------- */

const BG_IMAGES = [
  "/bg01.PNG",
  "/bg02.JPG",
  "/bg03.JPG",
  "/bg04.JPG",
  "/bg05.jpg",
  "/bg06.JPG",
  "/bg07.jpg",
  "/bg08.JPG",
  "/bg09.jpg",
  "/bg10.jpg",
  "/bg11.jpg",
  "/bg12.jpg",
  "/bg13.jpg",
  "/bg14.JPG",
  "/bg15.jpg",
  "/bg16.jpg",
  "/bg17.JPG",
  "/bg18.JPG",
  "/bg19.JPG",
  "/bg20.jpg",
  "/bg21.JPG",
  "/bg22.jpg",
  "/bg23.JPG",
];


function BackgroundSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % BG_IMAGES.length);
    }, 8000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {BG_IMAGES.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`absolute inset-0 m-auto min-w-full min-h-full object-cover transition-all duration-[1800ms] ease-out
            ${idx === active ? "opacity-100 scale-105" : "opacity-0 scale-110"}`}
        />
      ))}

      {/* Hafif karartma + blur */}
      <div className="absolute inset-0 bg-slate-950/55 backdrop-blur-[4px]" />
      {/* Üstten gelen hafif mor/pembe parıltı */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f472b620,transparent_55%)]" />
    </div>
  );
}

/* ---------------- VALENTINE SAYFASI ---------------- */

const YES_IMG = "/yes.jpg";
const NO_IMG = "/no.jpg";

type ValentinePageProps = {
  onBack: () => void;
};

function ValentinePage({ onBack }: ValentinePageProps) {
  const [noCount, setNoCount] = useState<number>(0);
  const [yesPressed, setYesPressed] = useState<boolean>(false);
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
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      <header className="flex items-center justify-between px-4 py-3 border-b border-slate-800">
        <button
          onClick={onBack}
          className="rounded-full border border-slate-600 px-3 py-1 text-sm hover:bg-slate-800"
        >
          ← panele geri dön
        </button>
        <span className="text-xs text-slate-400">
          Will you be my Valentine? 💛
        </span>
      </header>

      <div className="flex flex-1 flex-col items-center justify-center px-4">
        {yesPressed ? (
          <>
            <img
              src={YES_IMG}
              alt="Yes"
              className="max-h-[420px] md:max-h-[520px] w-auto rounded-xl object-contain shadow-xl"
            />
            <div className="my-4 text-3xl md:text-4xl font-bold text-center max-w-2xl">
              YAN YANA ÇOK GÜZELİZ SEVGİLİM 💛
              <br />
              SENİ HEP ŞU AN GÜLÜMSEDİĞİN GİBİ GÜLÜMSETECEĞİM
            </div>
          </>
        ) : (
          <>
            <img
              src={NO_IMG}
              alt="No"
              className="h-72 md:h-[380px] w-auto rounded-xl object-contain shadow-xl"
            />
            <h1 className="my-4 text-3xl md:text-4xl text-center font-semibold">
              SEVGİLİM OLUR MUSUN?
            </h1>
            <div className="flex items-center gap-4">
              <button
                className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-600 transition"
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                EVET
              </button>
              <button
                onClick={() => setNoCount((c: number) => c + 1)}
                className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-600 transition"
              >
                {getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* ---------------- FLOWERS SAYFASI (Ölümsüz Çiçeklerin) ---------------- */

type FlowersPageProps = {
  onBack: () => void;
};

function FlowersPage({ onBack }: FlowersPageProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      <header className="flex items-center justify-between px-4 py-3 border-b border-slate-800">
        <button
          onClick={onBack}
          className="rounded-full border border-slate-600 px-3 py-1 text-sm hover:bg-slate-800"
        >
          ← panele geri dön
        </button>
        <span className="text-xs text-slate-400">Ölümsüz Çiçeklerin 💐</span>
      </header>

      <main className="flex-1 px-4 py-4 md:px-8 md:py-6 flex flex-col gap-4 md:gap-6">
        <section className="max-w-3xl mx-auto text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">
            Ölümsüz Çiçeklerin
          </h1>
          <p className="text-sm md:text-base text-slate-300">
            Artık ne zaman istersen, neye ihtiyacın olursa olsun; çiçeklerin
            burada. Canın sıkıldığında, kendini mutsuz hissettiğinde ya da
            sadece içinden geldiğinde açıp bakabileceğin küçük bir çiçek bahçen
            var artık.
          </p>
          <p className="mt-2 text-xs md:text-sm text-slate-400">
            Zamanla bu sayfaya farklı temalarda, farklı hislere özel yeni
            çiçekler ve sürprizler de eklenebilir. Ama özü hep aynı kalacak:
            seni biraz olsun gülümsetebilmek.
          </p>
        </section>

        <section className="flex-1 max-w-5xl mx-auto w-full">
          <div className="relative w-full rounded-2xl border border-fuchsia-400/40 bg-slate-900/50 shadow-[0_0_40px_rgba(217,70,239,0.25)] overflow-hidden aspect-[9/16] md:aspect-[16/9]">
            <iframe
              src="/flowers/index.html"
              title="Ölümsüz Çiçeklerin"
              className="w-full h-full border-0"
            />
            <div className="absolute left-4 bottom-3 text-[11px] md:text-xs text-slate-300/80 bg-slate-900/60 px-3 py-1 rounded-full backdrop-blur">
              Çiçekler solmasın diye: hepsi burada, hep senin için 💐
            </div>
          </div>
        </section>
      </main>

      <footer className="px-6 pb-6 pt-2 text-xs text-slate-500 text-center">
        Bu panel sadece senin mutluluğun için hazırlandı ✨
      </footer>
    </div>
  );
}

/* ---------------- ANA DASHBOARD ---------------- */

type View = "home" | "valentine" | "flowers";

export default function App() {
  const [activeView, setActiveView] = useState<View>("home");

  if (activeView === "valentine") {
    return <ValentinePage onBack={() => setActiveView("home")} />;
  }

  if (activeView === "flowers") {
    return <FlowersPage onBack={() => setActiveView("home")} />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 relative overflow-hidden">
      <BackgroundSlider />
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* HEADER */}
        <header className="px-6 py-4 border-b border-slate-800 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold">
              Zümra&apos;nın Sanal Mutluluk Paneli 💌
            </h1>
            <p className="text-sm text-slate-300">
              Buradan istediğin gün, istediğin sürpriz sayfaya girebileceksin.
            </p>
          </div>
          <div className="text-xs text-slate-400">
            Hazırlayan:{" "}
            <span className="text-fuchsia-300 font-medium">Toprak</span>
          </div>
        </header>

        {/* GÖVDE */}
        <main className="flex-1 px-6 py-8">
          <section className="mb-6 max-w-2xl">
            <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 px-4 py-3 shadow-lg">
              <p className="text-sm text-slate-200">
                Zamanla buraya tek tek kartlar eklenecek: mektuplar, fotoğraf
                sayfaları, küçük oyunlar… Şimdilik ilk kartlarımız hazır:
              </p>
              <p className="mt-1 text-xs text-slate-400">
                (Hangisini merak edersen tıklayıp açabileceksin.)
              </p>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-3">
            {/* 1. KART: Valentine */}
            <button
              onClick={() => setActiveView("valentine")}
              className="group relative rounded-2xl border border-fuchsia-500/60 bg-slate-900/80 p-5 text-left shadow-[0_0_50px_rgba(217,70,239,0.35)] hover:shadow-fuchsia-500/40 hover:border-fuchsia-400 transition transform hover:-translate-y-1"
            >
              <div className="mb-3 text-xs font-medium uppercase tracking-wide text-fuchsia-300">
                İlk sürpriz
              </div>
              <h2 className="text-lg font-semibold mb-1">
                Will you be my Valentine?
              </h2>
              <p className="text-sm text-slate-200 mb-4">
                Evet butonunun giderek büyüdüğü, hayır demenin çok zor olduğu o
                sayfa burada 💛
              </p>
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Romantik / Eğlenceli</span>
                <span className="group-hover:text-fuchsia-300">
                  Tıkla ve aç →
                </span>
              </div>
            </button>

            {/* 2. KART: Ölümsüz Çiçeklerin */}
            <button
              onClick={() => setActiveView("flowers")}
              className="group relative rounded-2xl border border-emerald-400/50 bg-slate-900/75 p-5 text-left shadow-lg hover:shadow-emerald-400/40 hover:border-emerald-300 transition transform hover:-translate-y-1"
            >
              <div className="mb-3 text-xs font-medium uppercase tracking-wide text-emerald-300">
                Yeni
              </div>
              <h2 className="text-lg font-semibold mb-1">Ölümsüz Çiçeklerin</h2>
              <p className="text-sm text-slate-200 mb-4">
                Artık ne zaman ihtiyacın olursa, çiçeklerin burada. Solmayan,
                bekletmeyen, daima yanında olan küçük bir dijital bahçe gibi
                düşün 🌿
              </p>
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Huzur / Kendini İyi Hisset</span>
                <span className="group-hover:text-emerald-300">
                  Tıkla ve aç →
                </span>
              </div>
            </button>

            {/* 3. KART: Placeholder */}
            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/75 p-5 text-left opacity-80">
              <div className="mb-3 text-xs font-medium uppercase tracking-wide text-slate-400">
                Yakında
              </div>
              <h2 className="text-lg font-semibold mb-1">
                Photo Gallery / Memories
              </h2>
              <p className="text-sm text-slate-200">
                Sadece ikimizin bildiği anılardan oluşan küçük bir galeri
                sayfası için yer ayırdım. Hazır olduğunda buradan açılacak.
              </p>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="px-6 pb-6 pt-2 text-xs text-slate-500 text-center">
          Bu panel sadece senin için hazırlandı ✨
        </footer>
      </div>
    </div>
  );
}
