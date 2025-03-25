import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main className="relative bg-cover bg-center text-white font-sans" style={{ backgroundImage: "url('/Photo (2).jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-85 z-0"></div>

        {/* Header */}
        <header className="relative z-10 text-center py-6">
          <div className="flex justify-center items-center gap-4">
           
            <div>
              <h1 className="text-xl font-bold text-gray-300">मध्यपश्चिम विश्वविद्यालय स्वतन्त्र विद्यार्थी युनियन निर्वाचन २०८१</h1>
              <p className="text-base text-blue-100">लेनिन रेग्मीको आधिकारिक अभियान</p>
            </div>
          </div>
        </header>

        {/* Hero Pamphlet */}
        <section className="relative z-10 flex flex-col items-center justify-center min-h-[100vh] px-4 -mt-12">
          <div className="relative backdrop-blur-lg bg-white/20 text-white w-full max-w-3xl text-center p-12 rounded-2xl shadow-2xl transform -rotate-1 hover:rotate-0 transition duration-500">
            {/* Stamp */}
            <img
              src="/lestamp.png"
              alt="Voting Stamp"
              className="absolute top-4 right-4 w-30 h-20  rotate-12"
            />
            <Image
              src="/Lenweb.png"
              alt="Lenin Regmi"
              width={800}
              height={512}
              className="w-[95%] sm:w-full h-64 sm:h-[32rem] object-cover object-top rounded-xl shadow-lg mb-6 border-4 border-white"
            />
            <h2 className="text-4xl sm:text-6xl font-extrabold mb-4 leading-tight">लेलिन कुमार रेग्मी</h2>
            <p className="text-2xl font-medium mb-4">सभापति पदको उम्मेदवार</p>
            <p className="text-base italic mb-6">चैत १८ गते, भोट दिन नबिर्सनुहोस् ✔</p>
            <a
              href="#commitment"
              className="inline-block bg-white/90 text-purple-800 px-8 py-4 text-lg rounded-full font-semibold shadow hover:bg-white transition"
            >
              प्रतिबद्धता हेर्नुहोस्
            </a>
          </div>
          {/* Scroll Animation */}
          <div className="mt-10 animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative z-10 bg-white text-gray-900 py-16 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">मेरो बारेमा</h3>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              म लेनिन रेग्मी, विद्यार्थीहरूको हकहितका लागि काम गर्ने एक समर्पित अभियन्ता हुँ,
              शिक्षामा सुधार, समावेशी कार्यक्रमहरू, र पारदर्शी नेतृत्व मेरा प्रमुख एजेन्डाहरू हुन्।
            </p>
            <img
              src="/leninvai.jpg"
              alt="Lenin Regmi"
              className="mx-auto w-52 h-72 object-cover rounded shadow border"
            />
          </div>
        </section>

        {/* Commitment Section */}
        <section id="commitment" className="relative z-10 bg-gray-50 text-gray-900 py-16 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-blue-700 mb-6">प्रतिबद्धता</h3>
            <p className="text-base text-gray-800 leading-relaxed mb-6" style={{ textAlign: "justify" }}>
            प्रीय विद्यार्थी दाजुभाई तथा दिदिबहिनिहरु,  
स्ववियु  विद्यार्थीहरूको आवाज र शक्ति हो, एउटा निकाय जसले मध्यपश्चिम विश्वविद्यालयलाई सही दिशामा अघि बढाउने क्षमता राख्छ । यो निर्वाचन हाम्रो लागि एउटा अवसर हो—परिवर्तन ल्याउने, हाम्रो विश्वविद्यालयलाई  केन्द्र बनाउने ।म नयाँ दृष्टिकोण, नयाँ आशा, र नयाँ बिचार  लिएर आएको छु । शैक्षिक अध्ययन र बजारबिचको अन्तरलाई पुर्नु आवश्यक छ। हाम्रो विश्वविद्यालय लाई थप सुरक्षित, पूर्ण रूपमा डिजिटल, र उत्कृष्ट जनशक्ति उत्पादन गर्ने केन्द्र बनाउनुपर्छ । स्ववियुका गतिविधिहरू पारदर्शी बनाउनु र  दस्तावेजहरुलाई व्यवस्थित गर्नु मेरो प्राथमिकता हुनेछ। म नेतृत्व गर्न मात्र होइन, अब आउने  पुस्ताहरुका लागि बलियो आधार खडा गर्न आएको छु , किनभने यो यात्रा लामो छ, चुनौतीपूर्ण छ, र वास्तविक परिवर्तन  गर्न सम्भव छ । <br />
यो निर्वाचन केवल स्ववियुको लागि  हलाग, यो हरेक विद्यार्थीको सपना पूरा गर्ने अवसर हो जो आशा लिएर यश मध्यपश्चिम विश्वविद्यालयमा अध्ययन गर्न र भविस्यको खोजिमा आउनुभएको छ । अहिलेको विद्यार्थी राजनीति र त्यसको विथितीले  हामीलाई निराश बनाइरहेको छ, यो परिवर्तन हुनैपर्छ ।<br />
अब एकताका लागि, प्रगतिका लागि, र समग्र विश्वविद्यालय को  गौरव स्थापित गर्नको लागि  सामुहिक प्रयासका लागि समय आएको छ, हामीले हाम्रो उज्ज्वल भविस्य पाउनुपर्छ । <br />
पछुताउने वाटोलाई छोडौ<br />
लेलिन रेग्मीलाई नै रोजौ<br />
            </p>
            <h4 className="text-xl font-semibold text-blue-800 mb-4">एजेन्डाहरू:</h4>
            <ol className="list-decimal text-left list-inside space-y-3 text-gray-800 text-base mx-auto max-w-3xl" style={{ textAlign: "justify" }}>
              <li>समयमै भर्ना, परीक्षा र नतिजा प्रकाशन गर्न पूर्ण अनलाइन प्रणालीको व्यवस्था, परीक्षा आवेदन र मार्कशिट प्राप्तिको लागि आवश्यक वातावरणको निर्माण।</li>
              <li>वैज्ञानिक, व्यवहारिक तथा उत्पादनमूलक शिक्षा प्राप्तिको आन्दोलनमा सहभागी भई शैक्षिक निजीकरण र व्यापारीकरणको विरोध।</li>
              <li>विश्वविद्यालयको शैक्षिक वातावरणलाई गलत राजनीति, भागबण्डा र भ्रष्टाचारबाट मुक्त गरी प्राज्ञ वातावरणको निर्माण।</li>
              <li>स्वस्थ विद्यार्थी जीवनको लागि खेलकुद र खेलमैदानको विकास, हरेक कक्षामा वाटर डिस्पेन्सर, सरसफाइ र प्राथमिक उपचार सुविधाको व्यवस्था।</li>
              <li>मध्यपश्चिम विश्वविद्यालयमा भइरहेको अन्याय र बेथितिको अन्त्य।</li>
              <li>शैक्षिक गुणस्तर अभिवृद्धि, प्रत्येक संकायमा विषयगत प्राध्यापकको व्यवस्था र विद्यार्थीको आवाज प्रशासनसम्म पुर्‍याउने पहल।</li>
              <li>स्वास्थ्य बीमा कार्यक्रम:
                <ol className="list-decimal ml-12">
                  <li> कर्णाली प्रदेश अस्पतालमा स्वास्थ्य बीमाको सुरुवात।</li>
                  <li> स्वास्थ्य शिविर र मानसिक स्वास्थ्य कार्यशाला संचालन।</li>
                  <li> विद्यार्थीहरूको रक्त समूह संकलन र भण्डारण।</li>
                </ol>
              </li>
              <li>अनुसन्धान र नवीनतामा जोड – स्ववियुको कम्तीमा १०% बजेट अनुसन्धानमा विनियोजन।</li>
              <li>स्नातक र स्नातकोत्तर कार्यक्रमहरूबीच सहकार्य सुदृढ गर्ने।</li>
              <li>कक्षा प्रतिनिधिहरूसँग प्रत्येक सत्रान्तमा बैठक गरी समस्याहरूको सुनुवाई र फन्डको व्यवस्था।</li>
              <li>विद्यार्थी प्रतिनिधि र विभाग प्रमुखबीच संवादमार्फत संकायका समस्याहरू समाधान।</li>
              <li>प्रत्येक संकायमा ग्र्याजुएट स्कुलको निर्माण र आधुनिक प्रविधि र स्रोतहरूको उपलब्धता।</li>
              <li>स्ववियुको पारदर्शिता र विश्वसनीयता कायम गर्न इलाभरेट प्रणाली निर्माण।</li>
              <li>स्ववियुको छुट्टै प्रकाशन निर्माण, जसमा शैक्षिक सामग्री, प्रेरणादायी लेख र सूचना समावेश हुने।</li>
              <li>शिक्षक संघको सहकार्यमा ट्युटोरियल कक्षा र विशेष कक्षा सञ्चालन।</li>
              <li>शैक्षिक आवश्यकताको व्यवस्थापनमा संकायसँग समन्वय।</li>
              <li>विद्यार्थी सुरक्षाका लागि क्याम्पसहरूमा प्रहरी बिटको व्यवस्था र प्रशासनसँग समन्वय।</li>
              <li>क्याम्पसको सकारात्मक परिवर्तनको लागि विद्यार्थी, संकाय र प्रशासनबीच खुला छलफल।</li>
              <li>प्रशासन, विद्यार्थी प्रतिनिधि र कक्षा प्रतिनिधिबीच संवाद गरी समस्याको समाधान।</li>
            </ol>
            <div className="text-center mt-12">
              <a
                href="/pratibaddata patra.pdf"
                download
                className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-900"
              >
                प्रतिबद्धता पत्र PDF डाउनलोड गर्नुहोस्
              </a>
            </div>
          </div>
        </section>

        {/* Suggestion Form Section */}
        <section className="relative z-10 bg-white text-gray-900 py-16 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">तपाईंको सल्लाह / सुझाव</h3>
            <p className="text-gray-700 text-base mb-8 leading-relaxed" style={{ textAlign: "justify" }}>
              तपाईंले लिनिन रेग्मीको अभियान, एजेन्डा वा कुनै पनि विषयमा सुझाव दिन चाहनुहुन्छ भने तलको फारम प्रयोग गर्नुहोस्। तपाईंका विचार र प्रश्नहरू स्वागतयोग्य छन्।
            </p>
            <div className="w-full max-w-3xl mx-auto">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfdQjgl7vqBAGf7ys2QlapPO3qCZdm3lbbFA_6Pss28S4LNEg/viewform?embedded=true"
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="w-full border rounded shadow-lg"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </section>
        <footer className="relative  bg-gray-100 text-gray-700 text-center py-6  ">
          <p className="text-sm">
            Developed by{" "}
            <a
              href="https://milanghimire.info.np"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 font-semibold hover:underline"
            >
              Milan Ghimire
            </a>
            {" "}© {new Date().getFullYear()}
          </p>
        </footer>
      </main>
    </>
  );
}