// Test savollari ma'lumotlari
const testData = {
    categories: [
        { id: 1, name: "Hisoblashga doir mashqlar" },
        { id: 2, name: "Qisqa ko'paytirish formulalari" },
        { id: 3, name: "Kombinatorika masalalari" },
        { id: 4, name: "Kvadrat funksiyalar" },
        { id: 5, name: "Matnli masalalar" },
        { id: 6, name: "Tenglamalar" },
        { id: 7, name: "Tengsizliklar" },
        { id: 8, name: "Tenglamalar sistemasi" },
        { id: 9, name: "Trigonometriya elementlari" },
        { id: 10, name: "Progressiyalar" },
    ],
    questions: {
        // Har bir kategoriya uchun 20 ta savol
        // Bu yerda faqat namuna sifatida bir nechta savol keltirilgan
        
          1: [
            { id: 1, text: "1. Hisoblang: √16 - 2,75", answer: 2.25 },
            { id: 2, text: "2. Hisoblang: 2,03∙√400", answer: 40.6 },
            { id: 3, text: "3. Hisoblang: 2,3 - √0,36", answer: 1.8 },
            { id: 4, text: "4. Hisoblang: √49 - 〖0,5〗^2", answer: 6.25 },
            { id: 5, text: "5. Hisoblang: √36 - 4,45", answer: 1.55 },
            { id: 6, text: "6. Hisoblang: 3,05∙√900", answer: 91.5 },
            { id: 7, text: "7. Hisoblang: 3,2 - √0,36", answer: 2.8 },
            { id: 8, text: "8. Hisoblang: √64 - 〖0,1〗^2", answer: 7.99 },
            { id: 9, text: "9. Hisoblang: √25 - 3,15", answer: 1.85 },
            { id: 10, text: "10. Hisoblang: 5,02∙√1600", answer: 200.8 },
            { id: 11, text: "11. Hisoblang: 4,3 - √0,64", answer: 3.7 },
            { id: 12, text: "12. Hisoblang: √49 - 〖0,6〗^2", answer: 6.24 },
            { id: 13, text: "13. Hisoblang: √36 - 2,15", answer: 3.85 },
            { id: 14, text: "14. Hisoblang: 2,03∙√2500", answer: 101.5 },
            { id: 15, text: "15. Hisoblang: 7,3 - √0,49", answer: 6.8 },
            { id: 16, text: "16. Hisoblang: √81 - 〖0,8〗^2", answer: 8.36 },
            { id: 17, text: "17. Hisoblang: √16 - 6,75", answer: -2.75 },
            { id: 18, text: "18. Hisoblang: 4,05∙√400", answer: 810 },
            { id: 19, text: "19. Hisoblang: 9,1 - √0,09", answer: 8.85 },
            { id: 20, text: "20. Hisoblang: √121 - 〖0,3〗^2", answer: 10.91 }
          ],
          2: [
            { id: 1, text: "1. Ifodani soddalashtiring: a^2-4a-(a+2)^2", answer: "a^2 - 4a - (a^2 + 4a + 4) = -8a - 4" },
            { id: 2, text: "2. Ifodani soddalashtiring: (a^2-3a)/(a^2-9)", answer: "(a^2 - 3a)/(a^2 - 9) = (a - 3)/(a + 3)" },
            { id: 3, text: "3. Ifodani soddalashtiring: (a-3)^2-a(a+6)", answer: "a^2 - 6a + 9 - a^2 - 6a = -12a + 9" },
            { id: 4, text: "4. Ifodani soddalashtiring: (a^2-4a+4)/(3a-6)", answer: "(a^2 - 4a + 4)/(3a - 6) = (a - 2)^2 / 3(a - 2) = (a - 2)/3" },
            { id: 5, text: "5. Ifodani soddalashtiring: a^2+6a-(a-3)^2", answer: "a^2 + 6a - (a^2 - 6a + 9) = 12a - 9" },
            { id: 6, text: "6. Ifodani soddalashtiring: (a^2+5a)/(a^2-25)", answer: "(a^2 + 5a)/(a^2 - 25) = (a + 5)/(a - 5)" },
            { id: 7, text: "7. Ifodani soddalashtiring: (7-a)^2-a(14+a)", answer: "49 - 14a + a^2 - a(14 + a) = 49 - 14a + a^2 - 14a - a^2 = 49 - 28a" },
            { id: 8, text: "8. Ifodani soddalashtiring: (a^2+6a+9)/(5a+15)", answer: "(a^2 + 6a + 9)/(5a + 15) = (a + 3)^2 / 5(a + 3) = (a + 3)/5" },
            { id: 9, text: "9. Ifodani soddalashtiring: a^2-10a-(a+5)^2", answer: "a^2 - 10a - (a^2 + 10a + 25) = -20a - 25" },
            { id: 10, text: "10. Ifodani soddalashtiring: (a^2-6a)/(a^2-36)", answer: "(a^2 - 6a)/(a^2 - 36) = (a - 6)/(a + 6)" },
            { id: 11, text: "11. Ifodani soddalashtiring: (6-a)^2-a(6+a)", answer: "36 - 12a + a^2 - a(6 + a) = 36 - 12a + a^2 - 6a - a^2 = 36 - 18a" },
            { id: 12, text: "12. Ifodani soddalashtiring: (a^2+10a+25)/(3a+15)", answer: "(a^2 + 10a + 25)/(3a + 15) = (a + 5)^2 / 3(a + 5) = (a + 5)/3" },
            { id: 13, text: "13. Ifodani soddalashtiring: a^2+12a-(a-6)^2", answer: "a^2 + 12a - (a^2 - 12a + 36) = 24a - 36" },
            { id: 14, text: "14. Ifodani soddalashtiring: (a^2+7a)/(a^2-49)", answer: "(a^2 + 7a)/(a^2 - 49) = (a + 7)/(a - 7)" },
            { id: 15, text: "15. Ifodani soddalashtiring: (a-4)^2-a(a+8)", answer: "a^2 - 8a + 16 - a(a + 8) = a^2 - 8a + 16 - a^2 - 8a = -16a + 16" },
            { id: 16, text: "16. Ifodani soddalashtiring: (a^2-6a+9)/(4a-12)", answer: "(a^2 - 6a + 9)/(4a - 12) = (a - 3)^2 / 4(a - 3) = (a - 3)/4" },
            { id: 17, text: "17. Ifodani soddalashtiring: a^2-4a-(a-2)^2", answer: "a^2 - 4a - (a^2 - 4a + 4) = -4" },
            { id: 18, text: "18. Ifodani soddalashtiring: (a^2-10a)/(a^2-100)", answer: "(a^2 - 10a)/(a^2 - 100) = (a - 10)/(a + 10)" },
            { id: 19, text: "19. Ifodani soddalashtiring: (a-5)^2-a(a+10)", answer: "a^2 - 10a + 25 - a(a + 10) = a^2 - 10a + 25 - a^2 - 10a = -20a + 25" },
            { id: 20, text: "20. Ifodani soddalashtiring: (a^2+12a+36)/(3a+18)", answer: "(a^2 + 12a + 36)/(3a + 18) = (a + 6)^2 / 3(a + 6) = (a + 6)/3" }
          ],
          
            3: [
              { "id": 1, "text": "Maktab kutubxonasida informatika bo‘yicha 4 xil, xorijiy tillarni o‘rganish bo‘yicha 5 xil va matematika bo‘yicha 3 xil qo‘llanma bor. Jasur ikki xil sohadagi qo‘llanmalardan bittadan olib, bilimlarini mustahkamlamoqchi. Nechta turli usulda tanlash mumkin?", "answer": 12 },
              { "id": 2, "text": "Sizga ingliz tilidagi 7 ta qiziqarli kitob tavsiya qilindi. Ushbu oyda o‘z bilimlaringizni oshirish uchun ulardan 3 tasini tanlab o‘qimoqchisiz. Siz bu tanlovni nechta usulda amalga oshirishingiz mumkin?", "answer": 35 },
              { "id": 3, "text": "Ekologik tanlovda ishtirok etgan 12 ta maktab orasidan tabiatni asrash, chiqindilarni qayta ishlash va suvni tejash bo‘yicha 1-, 2-, 3-o‘rinlar belgilanmoqda. Bu mukofotli o‘rinlar maktablar orasida necha xil usul bilan taqsimlanishi mumkin?", "answer": 132 },
              { "id": 4, "text": "Ikkita har xil juft raqamdan tashkil topgan nechta ikki xonali son mavjud?", "answer": 20 },
              { "id": 5, "text": "Onlayn ta’lim platformasida 3 xil grafik dizayn, 4 xil dasturlash va 2 xil ingliz tili kurslari mavjud. Dilshod ikki xil yo‘nalishdan bittadan kurs olib, mustaqil ta’lim olishga qaror qildi. U nechta xil usulda kurslarni tanlashi mumkin?", "answer": 24 },
              { "id": 6, "text": "Maktabdagi til kursida 8 xil chet tili mashg‘ulotlari mavjud. Siz bu yil davomida kamida 4 tasida qatnashib, bilim doirangizni kengaytirmoqchisiz. Bu kurslarni necha xil usulda tanlashingiz mumkin?", "answer": 70 },
              { "id": 7, "text": "\"Toza shahar\" ekologik loyihasida qatnashayotgan 10 ta guruh orasidan 1 ta guruh ekologiya bo‘yicha \"Eng yaxshi loyiha\", 1 ta guruh \"Eng yaxshi suvni tejash g‘oyasi\", yana 1 ta guruh \"Eng yaxshi tabiatni asrash loyihasi\" nominatsiyasida g‘olib bo‘ladi. Ushbu nominatsiyalar nechta usulda taqsimlanishi mumkin?", "answer": 720 },
              { "id": 8, "text": "Raqamlari turli va 4 dan katta bo‘lmagan nechta ikki xonali son mavjud?", "answer": 29 },
              { "id": 9, "text": "Elektronika do‘konida 6 xil sichqoncha (mouse), 3 xil klaviatura va 5 xil flesh-xotira mavjud. Sanjar bu mahsulotlardan turli nomdagi ikkita mahsulot sotib olishni istaydi. Sanjarning nechta turli tanlov varianti mavjud?", "answer": 90 },
              { "id": 10, "text": "Xalqaro ta’lim dasturiga qatnashish imkoniyati sifatida 6 xil xorijiy mamlakatda o‘quv seminarlari mavjud. Siz ulardan aynan 2 ta mamlakatga borib bilim olishni rejalashtiryapsiz. Nechta turli xil tanlov amalga oshira olasiz?", "answer": 15 },
              { "id": 11, "text": "Maktabda o'tkazilgan ekologik aksiyada qatnashgan 15 o‘quvchidan 1-o‘ringa – \"Atrof-muhit posboni\", 2-o‘ringa – \"Tabiat himoyachisi\", 3-o‘ringa – \"Suvni tejash faoli\" medallari beriladi. Ushbu medallar nechta usulda taqsimlanishi mumkin?", "answer": 455 },
              { "id": 12, "text": "Raqamlari turli va 5 dan katta bo‘lmagan nechta ikki xonali son mavjud?", "answer": 37 },
              { "id": 13, "text": "Texnologiyalar markazida xorijiy tillarni o‘rgatuvchi 3 xil mobil dastur, dasturlashni o‘rgatuvchi 4 xil mobil dastur hamda matematikani oson o‘zlashtirish uchun 2 xil mobil dastur mavjud. Sarvinoz turli nomdagi ikki xil soha bo‘yicha ikkita dasturni smartfoniga yuklab olmoqchi bo‘lsa, nechta usulda tanlovni amalga oshirishi mumkin?", "answer": 24 },
              { "id": 14, "text": "Internetdagi ilmiy-ta’limiy vebinarda 5 xil mavzuda veb-darslar e'lon qilindi. Siz shulardan aynan 3 ta eng kerakli va foydalisini tanlab ko‘rmoqchisiz. Sizning tanlovingiz nechta turli usulda amalga oshiriladi?", "answer": 10 },
              { "id": 15, "text": "Hududdagi ekologik muammolarni hal qilish bo‘yicha 8 xil loyiha orasidan hakamlar 1-o‘rin (tabiatni asrash), 2-o‘rin (atrof-muhitni toza saqlash), 3-o‘rin (suv resurslarini tejash) uchun eng yaxshi loyihalarni tanlaydi. Ushbu tanlov necha xil usulda amalga oshiriladi?", "answer": 336 },
              { "id": 16, "text": "Ikkita har xil toq raqamdan tashkil topgan nechta ikki xonali son mavjud?", "answer": 25 },
              { "id": 17, "text": "Elektronika aksessuarlari sotiladigan do‘konda 6 xil smart-soat, 8 xil simsiz quloqchin va 5 xil portativ quvvatlagich (power bank) mavjud. Sevinch opa ushbu do‘kondan turli nomdagi ikkita mahsulot xarid qilishni rejalashtiryapti. Sevinch opa nechta turli usul bilan xarid amalga oshirishi mumkin?", "answer": 240 },
              { "id": 18, "text": "Sport bilan shug’ullanishingiz uchun ustozingiz sizga 5 xil sport mashg‘ulotlarini tavsiya qildi. Siz ulardan 2 tasini tanlamoqchisiz. Buni necha xil usulda amalga oshirish mumkin?", "answer": 10 },
              { "id": 19, "text": "Ekologik video-roliklar tanlovida ishtirok etgan 9 ta jamoa orasidan \"Eng yaxshi tabiatni muhofaza qilish videosi\", \"Eng yaxshi ekologik targ‘ibot videosi\" va \"Eng yaxshi suvni tejash videosi\" nominatsiyalari bo‘yicha mukofotlar topshiriladi. Mukofotlar jamoalar orasida necha xil usul bilan taqsimlanishi mumkin?", "answer": 504 },
              { "id": 20, "text": "Har bir raqami 6 dan kichik bo‘lmagan raqamlardan tashkil topgan nechta ikki xonali son mavjud?", "answer": 15 }
            ],
          
          
            4: [
              { id: 1, text: "1. y=x^2+4x+3 funksiya grafigini chizing...", answer: {
                  choraklar: "1, 2 va 4-choraklar",
                  kesishish_nuqtalari: "x o'qi: (-1,0) va (-3,0); y o'qi: (0,3)",
                  aniqlanish_sohasi: "Barcha haqiqiy sonlar (x ∈ ℝ)",
                  qiymatlar_toplami: "y ≥ -1",
                  oraliqlar: "O'sish: x > -2; Kamayish: x < -2"
              }},
              { id: 2, text: "2. y=-x^2+2x+8 funksiya grafigini chizing...", answer: {
                  choraklar: "1, 2 va 3-choraklar",
                  kesishish_nuqtalari: "x o'qi: (4,0) va (-2,0); y o'qi: (0,8)",
                  aniqlanish_sohasi: "Barcha haqiqiy sonlar (x ∈ ℝ)",
                  qiymatlar_toplami: "y ≤ 9",
                  oraliqlar: "O'sish: x < 1; Kamayish: x > 1"
              }},
              { id: 3, text: "3. y=2x^2-8 funksiya grafigini chizing...", answer: {
                  choraklar: "1, 2 va 3-choraklar",
                  kesishish_nuqtalari: "x o'qi: (2,0) va (-2,0); y o'qi: (0,-8)",
                  aniqlanish_sohasi: "Barcha haqiqiy sonlar (x ∈ ℝ)",
                  qiymatlar_toplami: "y ≥ -8",
                  oraliqlar: "O'sish: x > 0; Kamayish: x < 0"
              }},
              { id: 4, text: "4. y=-2x^2+4x funksiya grafigini chizing...", answer: {
                  choraklar: "1, 2 va 4-choraklar",
                  kesishish_nuqtalari: "x o'qi: (0,0) va (2,0); y o'qi: (0,0)",
                  aniqlanish_sohasi: "Barcha haqiqiy sonlar (x ∈ ℝ)",
                  qiymatlar_toplami: "y ≤ 2",
                  oraliqlar: "O'sish: x < 1; Kamayish: x > 1"
              }},
              { id: 5, text: "5. y=x^2-2x-3 funksiya grafigini chizing...", answer: {
                  choraklar: "1, 2, 3 va 4-choraklar",
                  kesishish_nuqtalari: "x o'qi: (3,0) va (-1,0); y o'qi: (0,-3)",
                  aniqlanish_sohasi: "Barcha haqiqiy sonlar (x ∈ ℝ)",
                  qiymatlar_toplami: "y ≥ -4",
                  oraliqlar: "O'sish: x > 1; Kamayish: x < 1"
              }},
              { id: 6, text: "6. y=-x^2+4x+5 funksiya grafigini chizing...", answer: {
                  choraklar: "1, 2, 3 va 4-choraklar",
                  kesishish_nuqtalari: "x o'qi: (5,0) va (-1,0); y o'qi: (0,5)",
                  aniqlanish_sohasi: "Barcha haqiqiy sonlar (x ∈ ℝ)",
                  qiymatlar_toplami: "y ≤ 9",
                  oraliqlar: "O'sish: x < 2; Kamayish: x > 2"
              }},
              { id: 7, text: "7. y=-3x^2+3 funksiya grafigini chizing...", answer: {
                  choraklar: "1, 2, 3 va 4-choraklar",
                  kesishish_nuqtalari: "x o'qi: (1,0) va (-1,0); y o'qi: (0,3)",
                  aniqlanish_sohasi: "Barcha haqiqiy sonlar (x ∈ ℝ)",
                  qiymatlar_toplami: "y ≤ 3",
                  oraliqlar: "O'sish: x < 0; Kamayish: x > 0"
              }},
              { id: 8, text: "8. y=-2x^2+8x funksiya grafigini chizing...", answer: {
                  choraklar: "1, 2, 3 va 4-choraklar",
                  kesishish_nuqtalari: "x o'qi: (0,0) va (4,0); y o'qi: (0,0)",
                  aniqlanish_sohasi: "Barcha haqiqiy sonlar (x ∈ ℝ)",
                  qiymatlar_toplami: "y ≤ 8",
                  oraliqlar: "O'sish: x < 2; Kamayish: x > 2"
              }},
              { id: 9, text: "9. y=x^2+4x-5 funksiya grafigini chizing...", answer: {
                  choraklar: "1, 2, 3 va 4-choraklar",
                  kesishish_nuqtalari: "x o'qi: (1,0) va (-5,0); y o'qi: (0,-5)",
                  aniqlanish_sohasi: "Barcha haqiqiy sonlar (x ∈ ℝ)",
                  qiymatlar_toplami: "y ≥ -9",
                  oraliqlar: "O'sish: x > -2; Kamayish: x < -2"
              }},
              { id: 10, text: "10. y=-x^2+2x+8 funksiya grafigini chizing...", answer: {
                  choraklar: "1, 2, 3 va 4-choraklar",
                  kesishish_nuqtalari: "x o'qi: (4,0) va (-2,0); y o'qi: (0,8)",
                  aniqlanish_sohasi: "Barcha haqiqiy sonlar (x ∈ ℝ)",
                  qiymatlar_toplami: "y ≤ 9",
                  oraliqlar: "O'sish: x < 1; Kamayish: x > 1"
              }}
          ],
          
          5: [
            { id: 1, text: "1. Belgilangan ishni 15 kishi 12 kunda bajarishi mumkin...", answer: "6 kun" },
            { id: 2, text: "2. A va B shaharlar orasidagi masofa 210 km...", answer: "24 km/soat" },
            { id: 3, text: "3. Laylo 5 kishidan iborat oilasi uchun palov tayyorlamoqchi...", answer: "2000 gramm (2 kg)" },
            { id: 4, text: "4. Suv sarfi birinchi oyda 10 % ga kamaydi...", answer: "23.5%" },
            { id: 5, text: "5. Bir ishni 10 kishi 8 kunda bajara oladi...", answer: "10 kishi" },
            { id: 6, text: "6. Maktabdan uyga 12 km masofa bor...", answer: "8 km/soat" },
            { id: 7, text: "7. Taxmina 4 kishidan iborat oilasi uchun palov tayyorlamoqchi...", answer: "2000 gramm (2 kg)" },
            { id: 8, text: "8. Suv sarfi birinchi oyda 15 % ga kamaydi...", answer: "23.5%" },
            { id: 9, text: "9. Ishchilar belgilangan vazifani 15 kunda bajara olishadi...", answer: "12 kishi" },
            { id: 10, text: "10. Daryo bo'yidagi yugurish yo'lagi 15 km...", answer: "12 km/soat" },
            { id: 11, text: "11. Oilasi uchun palov tayyorlashda Feruza 900 gramm go'sht sotib oladi...", answer: "2700 gramm (2.7 kg)" },
            { id: 12, text: "12. Bir IT kompaniyasining foydasi birinchi chorakda 25 %...", answer: "62.5%" },
            { id: 13, text: "13. Bir noutbukni faqat video ko'rib ishlatilsa...", answer: "4 soat" },
            { id: 14, text: "14. Ona uydan maktabga qarab 3 km/h tezlikda yura boshladi...", answer: "6 km/soat" },
            { id: 15, text: "15. Oilasi uchun palov tayyorlashda Shaxlo 700 gramm guruch sotib oladi...", answer: "3500 gramm (3.5 kg)" },
            { id: 16, text: "16. Uyali aloqa operatori bir oyda internet tezligini 50 % ga oshirdi...", answer: "20% oshdi" },
            { id: 17, text: "17. Jamshidning telefonida 5 GB internet bor...", answer: "6.67 soat (20/3)" },
            { id: 18, text: "18. Toshkent va Samarqand orasidagi masofa 300 km...", answer: "90 km/soat" },
            { id: 19, text: "19. Oilasi uchun palov tayyorlashda Zuxra 900 gramm guruch sotib oladi...", answer: "4500 gramm (4.5 kg)" },
            { id: 20, text: "20. Bir do'kondagi mahsulot narxi birinchi haftada 10 % ga arzonlashtirildi...", answer: "28% kamaydi" }
        ],
        6: [
          { id: 1, text: "1. Tenglamani yeching: x^2+|x|=6", answer: "x=2, x=-2" },
          { id: 2, text: "2. Tenglamani yeching: (x+3)/2+(x-1)/4=(x+7)/6+1", answer: "x=1" },
          { id: 3, text: "3. Tenglamani yeching: x=5+4√x", answer: "x=25" },
          { id: 4, text: "4. Tenglamani yeching: |7x-13|=15", answer: "x=4, x=-2/7" },
          { id: 5, text: "5. Tenglamani yeching: x^2-7|x|+6=0", answer: "x=±1, x=±6" },
          { id: 6, text: "6. Tenglamani yeching: (x-2)/3+(x+4)/6=(x+10)/4+1", answer: "x=10" },
          { id: 7, text: "7. Tenglamani yeching: x-12√x+35=0", answer: "x=25, x=49" },
          { id: 8, text: "8. Tenglamani yeching: |11x+22|=33", answer: "x=1, x=-5" },
          { id: 9, text: "9. Tenglamani yeching: x^2-4|x|=21", answer: "x=7, x=-7" },
          { id: 10, text: "10. Tenglamani yeching: (x+5)/5+(x-3)/3=(x+7)/2+1", answer: "x=15" },
          { id: 11, text: "11. Tenglamani yeching: 2x-1=3√(2x-1)", answer: "x=1, x=5" },
          { id: 12, text: "12. Tenglamani yeching: |24-8x|=31", answer: "x=-7/8, x=55/8" },
          { id: 13, text: "13. Tenglamani yeching: x^2-|x-5|=5", answer: "x=√10, x=-√10" },
          { id: 14, text: "14. Tenglamani yeching: (x-6)/4+(x+2)/6=(x+1)/3+2", answer: "x=10" },
          { id: 15, text: "15. Tenglamani yeching: x^4-26x^2+25=0", answer: "x=±1, x=±5" },
          { id: 16, text: "16. Tenglamani yeching: |9x+14|=29", answer: "x=5/3, x=-43/9" },
          { id: 17, text: "17. Tenglamani yeching: x^2+|x-4|=4", answer: "x=0" },
          { id: 18, text: "18. Tenglamani yeching: (x+1)/2+(x-2)/5=(x+3)/3+1", answer: "x=4" },
          { id: 19, text: "19. Tenglamani yeching: x^4-13x^2+36=0", answer: "x=±2, x=±3" },
          { id: 20, text: "20. Tenglamani yeching: |12-5x|=8", answer: "x=4/5, x=4" }
      ],
      7: [
          { id: 1, text: "1. Tengsizliklar sistemasini yeching: {5(x+1)-x>7x-8; 4x+2≤2(2x+1)-x}", answer: "x∈(1, 2]" },
          { id: 2, text: "2. Tengsizlikni yeching: 2x^2-5x+2≥0", answer: "x∈(-∞, 0.5]∪[2, ∞)" },
          { id: 3, text: "3. Tengsizlikni yeching: 1≤-2x+3<7", answer: "x∈(-2, 1]" },
          { id: 4, text: "4. Tengsizlikni yeching: |1-3x|≤2", answer: "x∈[-1/3, 1]" },
          { id: 5, text: "5. Tengsizliklar sistemasini yeching: {2(x-1)-3>3x-5; 3x+1≤6(1-x)+7x}", answer: "x∈(-∞, 0)∪(5/2, ∞)" },
          { id: 6, text: "6. Tengsizlikni yeching: 3x^2+2x-1<0", answer: "x∈(-1, 1/3)" },
          { id: 7, text: "7. Tengsizlikni yeching: 1≤-3x+4<10", answer: "x∈(-2, 1]" },
          { id: 8, text: "8. Tengsizlikni yeching: |4x-1|<17", answer: "x∈(-4, 4.5)" },
          { id: 9, text: "9. Tengsizliklar sistemasini yeching: {(x-5)/2>(1-2x)/3; (x+2)/3>(x-3)/2}", answer: "x∈(17/7, 13)" },
          { id: 10, text: "10. Tengsizlikni yeching: 4x^2-4x-3≥0", answer: "x∈(-∞, -0.5]∪[1.5, ∞)" },
          { id: 11, text: "11. Tengsizlikni yeching: 1≤-2x+5<7", answer: "x∈(-1, 2]" },
          { id: 12, text: "12. Tengsizlikni yeching: |4x-3|≥13", answer: "x∈(-∞, -2.5]∪[4, ∞)" },
          { id: 13, text: "13. Tengsizliklar sistemasini yeching: {(3x-5)/2<(1+2x)/3; (3x-3)/2>(2x+2)/3}", answer: "x∈(1.4, 13/5)" },
          { id: 14, text: "14. Tengsizlikni yeching: 6x^2-7x-5>0", answer: "x∈(-∞, -0.5)∪(5/3, ∞)" },
          { id: 15, text: "15. Tengsizlikni yeching: 2<-3x+8≤11", answer: "x∈[-1, 2)" },
          { id: 16, text: "16. Tengsizlikni yeching: |3x+2|>1", answer: "x∈(-∞, -1)∪(-1/3, ∞)" },
          { id: 17, text: "17. Tengsizliklar sistemasini yeching: {3x-5≥x-9; 2x+7<3x+9; 8-5x>2-4x}", answer: "x∈[-2, 6)" },
          { id: 18, text: "18. Tengsizlikni yeching: 6x^2-7x+2<0", answer: "x∈(0.5, 2/3)" },
          { id: 19, text: "19. Tengsizlikni yeching: 1<-3x+10≤13", answer: "x∈[-1, 3)" },
          { id: 20, text: "20. Tengsizlikni yeching: |2-5x|≥3", answer: "x∈(-∞, -0.2]∪[1, ∞)" }
      ],
      8: [
        { "id": 1, "text": "1. Dasturlash va ingliz tili kurslari. Alisher 3 ta dasturlash kursi va 2 ta ingliz tili kursiga yozilib, 500000 so'm to'ladi. Nodira esa 2 ta dasturlash va 4 ta ingliz tili kursiga 520000 so'm to'ladi. Har bir kurs qancha turadi?", 
          "answer": {"dasturlash_kursi": 120000, "ingliz_tili_kursi": 70000} },
        
        { "id": 2, "text": "2. Fan to'plamlari. Komil matematika bo'yicha 2 ta va fizika bo'yicha 3 ta test to'plami sotib olib, 85000 so'm to'ladi. Dildora 3 ta matematika va 1 ta fizika to'plamiga 75000 so'm to'ladi. Har bir fan test to'plamining narxini toping.",
          "answer": {"matematika_to'plami": 20000, "fizika_to'plami": 15000} },
        
        { "id": 3, "text": "3. Elektron qurilmalar. Bahodir 1 ta planshet va 2 ta simsiz quloqchin olib, 3200000 so'm to'ladi. Sohiba esa 2 ta planshet va 1 ta quloqchin uchun 4100000 million so'm to'ladi. 1 ta planshet va 1 ta simsiz quloqchin narxini toping.",
          "answer": {"planshet": 1700000, "simsiz_quloqchin": 750000} },
        
        { "id": 4, "text": "4. Robototexnika darslari. Maktabda 4 ta elektronika to'plami va 3 ta datchik to'plamiga 260000 so'm to'landi. Boshqa bir maktab 2 ta elektronika to'plami va 4 ta datchik to'plami uchun 240000 so'm to'ladi. Har bir to'plamning narxini toping.",
          "answer": {"elektronika_to'plami": 35000, "datchik_to'plami": 40000} },
        
        { "id": 5, "text": "5. Kutubxona obunasi. Ikrom 5 ta ilmiy jurnal va 2 ta badiiy kitob uchun 145000 so'm to'ladi. Lola 3 ta jurnal va 4 ta kitob uchun 155000 so'm to'ladi. Har birining narxini toping.",
          "answer": {"ilmiy_jurnal": 25000, "badiiy_kitob": 20000} },
        
        { "id": 6, "text": "6. Xarid masalasi. Javohir supermarketdan 3 kg olma va 2 kg banan xarid qilib, jami 46000 so'm to'ladi. Uning ukasi Diyor esa 2 kg olma va 4 kg banan olib, 56000 so'm to'ladi. 1 kg olma va 1 kg banan narxini toping.",
          "answer": {"olma": 12000, "banan": 8000} },
        
        { "id": 7, "text": "7. Ta'lim grantlari. Ilmiy tanlovda g'olib bo'lgan o'quvchilardan biri 2 ta grant va 3 ta sertifikat uchun 560000 so'm mukofot oldi. Boshqasi 4 ta grant va 1 ta sertifikat uchun 700000 so'm oldi. Grant va sertifikat uchun beriladigan mukofat pullarini aniqlang.",
          "answer": {"grant": 140000, "sertifikat": 140000} },
        
        { "id": 8, "text": "8. Mobil ilovalar obunasi. Javohir bir oyda 2 ta til o'rganish va 4 ta texnologik ilovaga obuna bo'lib, 120000 so'm to'ladi. Nilufar esa 3 ta til va 1 ta texnologik ilovaga 110000 so'm to'ladi. Har bir ilova obunasi necha so'm?",
          "answer": {"til_ilovasi": 40000, "texnologik_ilova": 10000} },
        
        { "id": 9, "text": "9. Olimpiada tayyorlov. Ilyos 3 ta fizika va 2 ta informatika darsida qatnashib, 230000 so'm to'ladi. Matluba 4 ta fizika va 3 ta informatika darsiga 340000 so'm to'lagan. Har bir fan uchun dars narxini aniqlang.",
          "answer": {"fizika_darsi": 50000, "informatika_darsi": 40000} },
        
        { "id": 10, "text": "10. Kompyuter kurslari. Umida 2 ta grafik dizayn va 5 ta ofis dasturlari bo'yicha kursga yozilib, 400000 so'm to'ladi. Sardor esa 4 ta grafik va 2 ta ofis kursiga 440000 so'm to'laydi. Har bir kursning narxini toping.",
          "answer": {"grafik_dizayn": 100000, "ofis_dasturlari": 40000} },
        
        { "id": 11, "text": "11. Xalqaro sertifikat imtihonlari. Aziz 1 ta IELTS va 2 ta ICDL imtihoni uchun 2400000 so'm to'ladi. Sevinch 2 ta IELTS va 1 ta ICDL uchun 3000000 so'm to'ladi. Har bir imtihon narxini toping.",
          "answer": {"IELTS": 1200000, "ICDL": 600000} },
        
        { "id": 12, "text": "12. Vebinar to'plami. 3 ta marketing vebinari va 4 ta IT vebinari 280000 so'mga tushdi. 2 ta marketing va 2 ta IT vebinari 180000 so'm bo'ldi. Har bir vebinarning narxini aniqlang.",
          "answer": {"marketing_vebinari": 40000, "IT_vebinari": 40000} },
        
        { "id": 13, "text": "13. Kompyuter jihozlari. Nodir 2 ta sichqoncha va 3 ta klaviaturaga 460000 so'm to'ladi. Akmal esa 3 ta sichqoncha va 1 ta klaviaturaga 410000 so'm to'ladi. Har birining narxini toping.",
          "answer": {"sichqoncha": 110000, "klaviatura": 80000} },
        
        { "id": 14, "text": "14. Robot kurslari ishtiroki. Azamat 4 ta nazariy va 2 ta amaliy darsga qatnashib, 500000 so'm to'ladi. Shahlo 3 ta nazariy va 4 ta amaliy darsga 640000 so'm to'lagan. Har bir dars turi narxini toping.",
          "answer": {"nazariy_dars": 90000, "amaliy_dars": 70000} },
        
        { "id": 15, "text": "15. Elektron kitoblar. Muhammad 5 ta biologiya va 2 ta kimyo elektron kitobini 155000 so'mga sotib oldi. Durdona esa 3 ta biologiya va 3 ta kimyo kitobiga 165000 so'm to'lagan. Har birining narxini toping.",
          "answer": {"biologiya_kitobi": 25000, "kimyo_kitobi": 30000} },
        
        { "id": 16, "text": "16. Coding bootcamp. Bekzod 2 oy Python, 3 oy JavaScript kursiga qatnashib, 780000 so'm to'ladi. Akrom esa 4 oy Python va 1 oy JavaScript uchun 760000 so'm to'lagan. Har bir kursning bir oylik narxini aniqlang.",
          "answer": {"Python": 150000, "JavaScript": 160000} },
        
        { "id": 17, "text": "17. Til bilish platformasi. 2 oy ingliz va 3 oy nemis tilini o'rgangan o'quvchi 630000 so'm to'lagan. 4 oy ingliz va 1 oy nemis tilini o'rgangan o'quvchi 610000 so'm to'lagan. Har bir til kursi uchun oyiga necha so'm turadi?",
          "answer": {"ingliz_tili": 150000, "nemis_tili": 110000} },
        
        { "id": 18, "text": "18. Elektron doskalar va proyektorlar. Bir maktab 2 ta elektron doska va 1 ta proyektorga 6,5 million so'm to'ladi. Boshqa maktab 3 ta doska va 2 ta proyektorga 10 million so'm to'lagan. Elektron doska va proyektor narxini toping.",
          "answer": {"elektron_doska": 2000000, "proyektor": 2500000} },
        
        { "id": 19, "text": "19. Dasturiy litsenziyalar. Muassasa 5 ta antivirus va 3 ta ofis dasturi uchun 870000 so'm to'ladi. Boshqa tashkilot 2 ta antivirus va 4 ta ofis dasturiga 740000 to'lagan. Har birining narxini toping.",
          "answer": {"antivirus": 120000, "ofis_dasturi": 90000} },
        
        { "id": 20, "text": "20. O'quv fanlariga tayyorlov. Ziyod 3 ta tarix va 2 ta geografiya kursiga qatnashib, 460000 so'm to'lagan. Umid 2 ta tarix va 3 ta geografiya uchun 430000 so'm to'ladi. Har bir kurs qancha turadi?",
          "answer": {"tarix_kursi": 100000, "geografiya_kursi": 80000} }
    ],
    9 : [
      { "id": 1, "text": "1. Agar cosα = -√7/4 va π/2 < α < π bo'lsa, sinα va tgα ni toping.", 
        "answer": {"sinα": "3/4", "tgα": "-3/√7"} },
      
      { "id": 2, "text": "2. Agar sinα = (2√2)/3 va π/2 < α < π bo'lsa, cosα va tgα ni toping.",
        "answer": {"cosα": "-1/3", "tgα": "-2√2"} },
      
      { "id": 3, "text": "3. Agar cosα = -3/5 va π < α < 3π/2 bo'lsa, sinα va tgα ni toping.",
        "answer": {"sinα": "-4/5", "tgα": "4/3"} },
      
      { "id": 4, "text": "4. Agar sinα = - (2√5)/6 va -π/2 < α < 0 bo'lsa, cosα va tgα ni toping.",
        "answer": {"cosα": "4/6", "tgα": "-√5/2"} },
      
      { "id": 5, "text": "5. Agar cosα = - (2√6)/5 va π/2 < α < π bo'lsa, sinα va tgα ni toping.",
        "answer": {"sinα": "1/5", "tgα": "-1/(2√6)"} },
      
      { "id": 6, "text": "6. Agar sinα = √15/4 va π/2 < α < π bo'lsa, cosα va tgα ni toping.",
        "answer": {"cosα": "-1/4", "tgα": "-√15"} },
      
      { "id": 7, "text": "7. Agar cosα = -4/5 va π < α < 3π/2 bo'lsa, sinα va tgα ni toping.",
        "answer": {"sinα": "-3/5", "tgα": "3/4"} },
      
      { "id": 8, "text": "8. Agar sinα = - (2√10)/7 va -π/2 < α < 0 bo'lsa, cosα va tgα ni toping.",
        "answer": {"cosα": "3/7", "tgα": "-2√10/3"} },
      
      { "id": 9, "text": "9. Agar cosα = -1/3 va π/2 < α < π bo'lsa, sinα va tgα ni toping.",
        "answer": {"sinα": "2√2/3", "tgα": "-2√2"} },
      
      { "id": 10, "text": "10. Agar sinα = √7/4 va π/2 < α < π bo'lsa, cosα va tgα ni toping.",
        "answer": {"cosα": "-3/4", "tgα": "-√7/3"} },
      
      { "id": 11, "text": "11. Agar cosα = -5/13 va π < α < 3π/2 bo'lsa, sinα va tgα ni toping.",
        "answer": {"sinα": "-12/13", "tgα": "12/5"} },
      
      { "id": 12, "text": "12. Agar sinα = -√21/5 va -π/2 < α < 0 bo'lsa, cosα va tgα ni toping.",
        "answer": {"cosα": "2/5", "tgα": "-√21/2"} },
      
      { "id": 13, "text": "13. Agar cosα = -2/5 va π/2 < α < π bo'lsa, sinα va tgα ni toping.",
        "answer": {"sinα": "√21/5", "tgα": "-√21/2"} },
      
      { "id": 14, "text": "14. Agar sinα = (2√6)/7 va π/2 < α < π bo'lsa, cosα va tgα ni toping.",
        "answer": {"cosα": "-1/7", "tgα": "-2√6"} },
      
      { "id": 15, "text": "15. Agar cosα = -12/13 va π < α < 3π/2 bo'lsa, sinα va tgα ni toping.",
        "answer": {"sinα": "-5/13", "tgα": "5/12"} },
      
      { "id": 16, "text": "16. Agar sinα = -√11/6 va -π/2 < α < 0 bo'lsa, cosα va tgα ni toping.",
        "answer": {"cosα": "5/6", "tgα": "-√11/5"} },
      
      { "id": 17, "text": "17. Agar cosα = -2/3 va π/2 < α < π bo'lsa, sinα va tgα ni toping.",
        "answer": {"sinα": "√5/3", "tgα": "-√5/2"} },
      
      { "id": 18, "text": "18. Agar sinα = √11/6 va π/2 < α < π bo'lsa, cosα va tgα ni toping.",
        "answer": {"cosα": "-5/6", "tgα": "-√11/5"} },
      
      { "id": 19, "text": "19. Agar cosα = -24/25 va π < α < 3π/2 bo'lsa, sinα va tgα ni toping.",
        "answer": {"sinα": "-7/25", "tgα": "7/24"} },
      
      { "id": 20, "text": "20. Agar sinα = - (2√2)/3 va -π/2 < α < 0 bo'lsa, cosα va tgα ni toping.",
        "answer": {"cosα": "1/3", "tgα": "-2√2"} }
  ],
  10:[
    { "id": 1, "text": "1. Asror 10 kun davomida matematikadan berilgan mustaqil ish topshiriqlarini to'liq bajarib tugatishni reja qildi...", 
      "answer": 205 },
    
    { "id": 2, "text": "2. Bir bog'bon bahor mavsumida har kuni ko'proq ko'chat ekishga qaror qildi...",
      "answer": 198 },
    
    { "id": 3, "text": "3. Bir ustaxona ishchisi har kuni detallar yig'ishni ko'paytirib bordi...",
      "answer": 240 },
    
    { "id": 4, "text": "4. Bir rassom yangi kolleksiya ustida ishlamoqda...",
      "answer": 119 },
    
    { "id": 5, "text": "5. Bir talaba kurs ishining yozma qismini bo'lib-bo'lib bajarishga qaror qildi...",
      "answer": 7000 },
    
    { "id": 6, "text": "6. Bir laboratoriyada o'stirilayotgan o'simlik har 2 kunda shunchalik tez rivojlanadiki...",
      "answer": 648 },
    
    { "id": 7, "text": "7. Bir blogerning YouTube kanali tez ommalashmoqda...",
      "answer": 8000 },
    
    { "id": 8, "text": "8. Bir ilmiy tajribada bakteriyalar har 4 soatda 3 baravarga ko'paymoqda...",
      "answer": 8100 },
    
    { "id": 9, "text": "9. Bir talaba o'zining loyiha faylini fleshka orqali do'stlariga tarqatmoqda...",
      "answer": 64 },
    
    { "id": 10, "text": "10. Bir yolg'on xabar telegramda har 6 soatda ikki baravarga ko'payib tarqalmoqda...",
      "answer": 80 },
    
    { "id": 11, "text": "11. Doston har kuni dars o'qish vaqtini oshirib boradi...",
      "answer": 75 },
    
    { "id": 12, "text": "12. Malika sog'lig'i uchun har kuni yurish masofasini oshirib bordi...",
      "answer": 5.2 },
    
    { "id": 13, "text": "13. Sevara ingliz tilidan so'z yodlashni boshladi...",
      "answer": 36 },
    
    { "id": 14, "text": "14. Ixtiyor oshpazlikni o'rganmoqda...",
      "answer": 27 },
    
    { "id": 15, "text": "15. Laylo har kuni o'ziga maqsad belgilab, uni bajarmoqda...",
      "answer": 21 },
    
    { "id": 16, "text": "16. Bir daraxt urug'i tuproqqa tushgandan so'ng har bosqichda 2 ta yangi o'simlik hosil qiladi...",
      "answer": 127 },
    
    { "id": 17, "text": "17. Bir talaba onlayn kursdan mamnun bo'lib, uni 2 do'stiga tavsiya qiladi...",
      "answer": 127 },
    
    { "id": 18, "text": "18. Bir kompyuter virusi har 12 soatda 5 ta qurilmaga tarqalmoqda...",
      "answer": 156 },
    
    { "id": 19, "text": "19. Bir yangi ochilgan podkast dastlab 1 kishi tomonidan tinglandi...",
      "answer": 63 },
    
    { "id": 20, "text": "20. Yerga yaqin orbitadagi sun'iy yo'ldosh signalini yubordi...",
      "answer": 364 }
]
          
        // ... qolgan kategoriyalar uchun savollar
    }
};

// DOM elementlari
const categoryContainer = document.getElementById('category-container');
const categoriesSection = document.getElementById('categories');
const questionsSection = document.getElementById('questions');
const questionContainer = document.getElementById('question-container');
const categoryTitle = document.getElementById('category-title');
const backButton = document.getElementById('back-to-categories');

// Kategoriyalarni yuklash
function loadCategories() {
    categoryContainer.innerHTML = '';
    
    testData.categories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.innerHTML = `
            <h3>${category.name}</h3>
            <p>20 ta savol</p>
        `;
        
        categoryCard.addEventListener('click', () => {
            showQuestions(category.id, category.name);
        });
        
        categoryContainer.appendChild(categoryCard);
    });
}

// Savollarni ko'rsatish
function showQuestions(categoryId, categoryName) {
    categoriesSection.style.display = 'none';
    questionsSection.style.display = 'block';
    categoryTitle.textContent = categoryName;
    
    questionContainer.innerHTML = '';
    
    const questions = testData.questions[categoryId] || [];
    
    questions.forEach((question, index) => {
        const questionItem = document.createElement('div');
        questionItem.className = 'question-item';
        questionItem.innerHTML = `
            <div class="question-text">${question.text}</div>
            <div class="question-text"> Javob:${question.answer}</div>

            
        `;
        
        questionContainer.appendChild(questionItem);
    });
}

// Kategoriyalarga qaytish
backButton.addEventListener('click', () => {
    categoriesSection.style.display = 'block';
    questionsSection.style.display = 'none';
});

// Dasturni ishga tushirish
document.addEventListener('DOMContentLoaded', () => {
    loadCategories();
    
    // Savollarni localStorage ga saqlash (agar kerak bo'lsa)
    if (!localStorage.getItem('mathQuestionsLoaded')) {
        // Bu yerda savollarni serverdan yuklash yoki boshqa manbadan olish mumkin
        localStorage.setItem('mathQuestionsLoaded', 'true');
    }
});
