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
            { id: 1,  text: "1. Hisoblang: √16 - 2,75" },
            { id: 2,  text: "2. Hisoblang: 2,03∙√400" },
            { id: 3,  text: "3. Hisoblang: 2,3 - √0,36" },
            { id: 4,  text: "4. Hisoblang: √49 - 〖0,5〗^2" },
            { id: 5,  text: "5. Hisoblang: √36 - 4,45" },
            { id: 6,  text: "6. Hisoblang: 3,05∙√900" },
            { id: 7,  text: "7. Hisoblang: 3,2 - √0,36" },
            { id: 8,  text: "8. Hisoblang: √64 - 〖0,1〗^2" },
            { id: 9,  text: "9. Hisoblang: √25 - 3,15" },
            { id: 10, text: "10. Hisoblang: 5,02∙√1600" },
            { id: 11, text: "11. Hisoblang: 4,3 - √0,64" },
            { id: 12, text: "12. Hisoblang: √49 - 〖0,6〗^2" },
            { id: 13, text: "13. Hisoblang: √36 - 2,15" },
            { id: 14, text: "14. Hisoblang: 2,03∙√2500" },
            { id: 15, text: "15. Hisoblang: 7,3 - √0,49" },
            { id: 16, text: "16. Hisoblang: √81 - 〖0,8〗^2" },
            { id: 17, text: "17. Hisoblang: √16 - 6,75" },
            { id: 18, text: "18. Hisoblang: 4,05∙√400" },
            { id: 19, text: "19. Hisoblang: 9,1 - √0,09" },
            { id: 20, text: "20. Hisoblang: √121 - 〖0,3〗^2" }
          ],
          
          2:[
            { id: 1,  text: "1. Ifodani soddalashtiring: a^2-4a-(a+2)^2" },
            { id: 2,  text: "2. Ifodani soddalashtiring: (a^2-3a)/(a^2-9)" },
            { id: 3,  text: "3. Ifodani soddalashtiring: (a-3)^2-a(a+6)" },
            { id: 4,  text: "4. Ifodani soddalashtiring: (a^2-4a+4)/(3a-6)" },
            { id: 5,  text: "5. Ifodani soddalashtiring: a^2+6a-(a-3)^2" },
            { id: 6,  text: "6. Ifodani soddalashtiring: (a^2+5a)/(a^2-25)" },
            { id: 7,  text: "7. Ifodani soddalashtiring: (7-a)^2-a(14+a)" },
            { id: 8,  text: "8. Ifodani soddalashtiring: (a^2+6a+9)/(5a+15)" },
            { id: 9,  text: "9. Ifodani soddalashtiring: a^2-10a-(a+5)^2" },
            { id: 10, text: "10. Ifodani soddalashtiring: (a^2-6a)/(a^2-36)" },
            { id: 11, text: "11. Ifodani soddalashtiring: (6-a)^2-a(6+a)" },
            { id: 12, text: "12. Ifodani soddalashtiring: (a^2+10a+25)/(3a+15)" },
            { id: 13, text: "13. Ifodani soddalashtiring: a^2+12a-(a-6)^2" },
            { id: 14, text: "14. Ifodani soddalashtiring: (a^2+7a)/(a^2-49)" },
            { id: 15, text: "15. Ifodani soddalashtiring: (a-4)^2-a(a+8)" },
            { id: 16, text: "16. Ifodani soddalashtiring: (a^2-6a+9)/(4a-12)" },
            { id: 17, text: "17. Ifodani soddalashtiring: a^2-4a-(a-2)^2" },
            { id: 18, text: "18. Ifodani soddalashtiring: (a^2-10a)/(a^2-100)" },
            { id: 19, text: "19. Ifodani soddalashtiring: (a-5)^2-a(a+10)" },
            { id: 20, text: "20. Ifodani soddalashtiring: (a^2+12a+36)/(3a+18)" }
          ],
          3: [
            { id: 1,  text: "1. Maktab kutubxonasida informatika bo‘yicha 4 xil, xorijiy tillarni o‘rganish bo‘yicha 5 xil va matematika bo‘yicha 3 xil qo‘llanma bor. Jasur ikki xil sohadagi qo‘llanmalardan bittadan olib, bilimlarini mustahkamlamoqchi. Nechta turli usulda tanlash mumkin?" },
            { id: 2,  text: "2. Sizga ingliz tilidagi 7 ta qiziqarli kitob tavsiya qilindi. Ushbu oyda o‘z bilimlaringizni oshirish uchun ulardan 3 tasini tanlab o‘qimoqchisiz. Siz bu tanlovni nechta usulda amalga oshirishingiz mumkin?" },
            { id: 3,  text: "3. Ekologik tanlovda ishtirok etgan 12 ta maktab orasidan tabiatni asrash, chiqindilarni qayta ishlash va suvni tejash bo‘yicha 1-, 2-, 3-o‘rinlar belgilanmoqda. Bu mukofotli o‘rinlar maktablar orasida necha xil usul bilan taqsimlanishi mumkin?" },
            { id: 4,  text: "4. Ikkita har xil juft raqamdan tashkil topgan nechta ikki xonali son mavjud?" },
            { id: 5,  text: "5. Onlayn ta’lim platformasida 3 xil grafik dizayn, 4 xil dasturlash va 2 xil ingliz tili kurslari mavjud. Dilshod ikki xil yo‘nalishdan bittadan kurs olib, mustaqil ta’lim olishga qaror qildi. U nechta xil usulda kurslarni tanlashi mumkin?" },
            { id: 6,  text: "6. Maktabdagi til kursida 8 xil chet tili mashg‘ulotlari mavjud. Siz bu yil davomida kamida 4 tasida qatnashib, bilim doirangizni kengaytirmoqchisiz. Bu kurslarni necha xil usulda tanlashingiz mumkin?" },
            { id: 7,  text: "7. \"Toza shahar\" ekologik loyihasida qatnashayotgan 10 ta guruh orasidan 1 ta guruh ekologiya bo‘yicha \"Eng yaxshi loyiha\", 1 ta guruh \"Eng yaxshi suvni tejash g‘oyasi\", yana 1 ta guruh \"Eng yaxshi tabiatni asrash loyihasi\" nominatsiyasida g‘olib bo‘ladi. Ushbu nominatsiyalar nechta usulda taqsimlanishi mumkin?" },
            { id: 8,  text: "8. Raqamlari turli va 4 dan katta bo‘lmagan nechta ikki xonali son mavjud?" },
            { id: 9,  text: "9. Elektronika do‘konida 6 xil sichqoncha (mouse), 3 xil klaviatura va 5 xil flesh-xotira mavjud. Sanjar bu mahsulotlardan turli nomdagi ikkita mahsulot sotib olishni istaydi. Sanjarning nechta turli tanlov varianti mavjud?" },
            { id: 10, text: "10. Xalqaro ta’lim dasturiga qatnashish imkoniyati sifatida 6 xil xorijiy mamlakatda o‘quv seminarlari mavjud. Siz ulardan aynan 2 ta mamlakatga borib bilim olishni rejalashtiryapsiz. Nechta turli xil tanlov amalga oshira olasiz?" },
            { id: 11, text: "11. Maktabda o'tkazilgan ekologik aksiyada qatnashgan 15 o‘quvchidan 1-o‘ringa – \"Atrof-muhit posboni\", 2-o‘ringa – \"Tabiat himoyachisi\", 3-o‘ringa – \"Suvni tejash faoli\" medallari beriladi. Ushbu medallar nechta usulda taqsimlanishi mumkin?" },
            { id: 12, text: "12. Raqamlari turli va 5 dan katta bo‘lmagan nechta ikki xonali son mavjud?" },
            { id: 13, text: "13. Texnologiyalar markazida xorijiy tillarni o‘rgatuvchi 3 xil mobil dastur, dasturlashni o‘rgatuvchi 4 xil mobil dastur hamda matematikani oson o‘zlashtirish uchun 2 xil mobil dastur mavjud. Sarvinoz turli nomdagi ikki xil soha bo‘yicha ikkita dasturni smartfoniga yuklab olmoqchi bo‘lsa, nechta usulda tanlovni amalga oshirishi mumkin?" },
            { id: 14, text: "14. Internetdagi ilmiy-ta’limiy vebinarda 5 xil mavzuda veb-darslar e'lon qilindi. Siz shulardan aynan 3 ta eng kerakli va foydalisini tanlab ko‘rmoqchisiz. Sizning tanlovingiz nechta turli usulda amalga oshiriladi?" },
            { id: 15, text: "15. Hududdagi ekologik muammolarni hal qilish bo‘yicha 8 xil loyiha orasidan hakamlar 1-o‘rin (tabiatni asrash), 2-o‘rin (atrof-muhitni toza saqlash), 3-o‘rin (suv resurslarini tejash) uchun eng yaxshi loyihalarni tanlaydi. Ushbu tanlov necha xil usulda amalga oshiriladi?" },
            { id: 16, text: "16. Ikkita har xil toq raqamdan tashkil topgan nechta ikki xonali son mavjud?" },
            { id: 17, text: "17. Elektronika aksessuarlari sotiladigan do‘konda 6 xil smart-soat, 8 xil simsiz quloqchin va 5 xil portativ quvvatlagich (power bank) mavjud. Sevinch opa ushbu do‘kondan turli nomdagi ikkita mahsulot xarid qilishni rejalashtiryapti. Sevinch opa nechta turli usul bilan xarid amalga oshirishi mumkin?" },
            { id: 18, text: "18. Sport bilan shug’ullanishingiz uchun ustozingiz sizga 5 xil sport mashg‘ulotlarini tavsiya qildi. Siz ulardan 2 tasini tanlamoqchisiz. Buni necha xil usulda amalga oshirish mumkin?" },
            { id: 19, text: "19. Ekologik video-roliklar tanlovida ishtirok etgan 9 ta jamoa orasidan \"Eng yaxshi tabiatni muhofaza qilish videosi\", \"Eng yaxshi ekologik targ‘ibot videosi\" va \"Eng yaxshi suvni tejash videosi\" nominatsiyalari bo‘yicha mukofotlar topshiriladi. Mukofotlar jamoalar orasida necha xil usul bilan taqsimlanishi mumkin?" },
            { id: 20, text: "20. Har bir raqami 6 dan kichik bo‘lmagan raqamlardan tashkil topgan nechta ikki xonali son mavjud?" }
          ],
          
          4: [
            { id: 1,  text: "1. y=x^2+4x+3 funksiya grafigini chizing. Grafik asosida quyidagilarni aniqlang: 1) Funksiya grafigi koordinata tekisligining qaysi choraklarida o‘tishini; 2) Koordinata o‘qlari bilan kesishish nuqtalari; 3) Aniqlanish sohasi (ya’ni, x ning qanday qiymatlari uchun funksiya mavjud); 4) Qiymatlar to‘plami (ya’ni, y qanday qiymatlar qabul qiladi); 5) O‘sish va kamayish oraliqlari;" },
            { id: 2,  text: "2. y=-x^2+2x+8 funksiya grafigini chizing. Grafik asosida quyidagilarni aniqlang: 1) Funksiya grafigi koordinata tekisligining qaysi choraklarida o‘tishini; 2) Koordinata o‘qlari bilan kesishish nuqtalari; 3) Aniqlanish sohasi (ya’ni, x ning qanday qiymatlari uchun funksiya mavjud); 4) Qiymatlar to‘plami (ya’ni, y qanday qiymatlar qabul qiladi); 5) O‘sish va kamayish oraliqlari;" },
            { id: 3,  text: "3. y=2x^2-8 funksiya grafigini chizing. Grafik asosida quyidagilarni aniqlang: 1) Funksiya grafigi koordinata tekisligining qaysi choraklarida o‘tishini; 2) Koordinata o‘qlari bilan kesishish nuqtalari; 3) Aniqlanish sohasi (ya’ni, x ning qanday qiymatlari uchun funksiya mavjud); 4) Qiymatlar to‘plami (ya’ni, y qanday qiymatlar qabul qiladi); 5) O‘sish va kamayish oraliqlari;" },
            { id: 4,  text: "4. y=-2x^2+4x funksiya grafigini chizing. Grafik asosida quyidagilarni aniqlang: 1) Funksiya grafigi koordinata tekisligining qaysi choraklarida o‘tishini; 2) Koordinata o‘qlari bilan kesishish nuqtalari; 3) Aniqlanish sohasi (ya’ni, x ning qanday qiymatlari uchun funksiya mavjud); 4) Qiymatlar to‘plami (ya’ni, y qanday qiymatlar qabul qiladi); 5) O‘sish va kamayish oraliqlari;" },
            { id: 5,  text: "5. y=x^2-2x-3 funksiya grafigini chizing. Grafik asosida quyidagilarni aniqlang: 1) Funksiya grafigi koordinata tekisligining qaysi choraklarida o‘tishini; 2) Koordinata o‘qlari bilan kesishish nuqtalari; 3) Aniqlanish sohasi (ya’ni, x ning qanday qiymatlari uchun funksiya mavjud); 4) Qiymatlar to‘plami (ya’ni, y qanday qiymatlar qabul qiladi); 5) O‘sish va kamayish oraliqlari;" },
            { id: 6,  text: "6. y=-x^2+4x+5 funksiya grafigini chizing. Grafik asosida quyidagilarni aniqlang: 1) Funksiya grafigi koordinata tekisligining qaysi choraklarida o‘tishini; 2) Koordinata o‘qlari bilan kesishish nuqtalari; 3) Aniqlanish sohasi (ya’ni, x ning qanday qiymatlari uchun funksiya mavjud); 4) Qiymatlar to‘plami (ya’ni, y qanday qiymatlar qabul qiladi); 5) O‘sish va kamayish oraliqlari;" },
            { id: 7,  text: "7. y=-3x^2+3 funksiya grafigini chizing. Grafik asosida quyidagilarni aniqlang: 1) Funksiya grafigi koordinata tekisligining qaysi choraklarida o‘tishini; 2) Koordinata o‘qlari bilan kesishish nuqtalari; 3) Aniqlanish sohasi (ya’ni, x ning qanday qiymatlari uchun funksiya mavjud); 4) Qiymatlar to‘plami (ya’ni, y qanday qiymatlar qabul qiladi); 5) O‘sish va kamayish oraliqlari;" },
            { id: 8,  text: "8. y=-2x^2+8x funksiya grafigini chizing. Grafik asosida quyidagilarni aniqlang: 1) Funksiya grafigi koordinata tekisligining qaysi choraklarida o‘tishini; 2) Koordinata o‘qlari bilan kesishish nuqtalari; 3) Aniqlanish sohasi (ya’ni, x ning qanday qiymatlari uchun funksiya mavjud); 4) Qiymatlar to‘plami (ya’ni, y qanday qiymatlar qabul qiladi); 5) O‘sish va kamayish oraliqlari;" },
            { id: 9,  text: "9. y=x^2+4x-5 funksiya grafigini chizing. Grafik asosida quyidagilarni aniqlang: 1) Funksiya grafigi koordinata tekisligining qaysi choraklarida o‘tishini; 2) Koordinata o‘qlari bilan kesishish nuqtalari; 3) Aniqlanish sohasi (ya’ni, x ning qanday qiymatlari uchun funksiya mavjud); 4) Qiymatlar to‘plami (ya’ni, y qanday qiymatlar qabul qiladi); 5) O‘sish va kamayish oraliqlari;" },
            { id: 10, text: "10. y=-x^2+2x+8 funksiya grafigini chizing. Grafik asosida quyidagilarni aniqlang: 1) Funksiya grafigi koordinata tekisligining qaysi choraklarida o‘tishini; 2) Koordinata o‘qlari bilan kesishish nuqtalari; 3) Aniqlanish sohasi (ya’ni, x ning qanday qiymatlari uchun funksiya mavjud); 4) Qiymatlar to‘plami (ya’ni, y qanday qiymatlar qabul qiladi); 5) O‘sish va kamayish oraliqlari;" },
            { id: 11, text: "11. y=-2x^2+8 funksiya grafigini chizing. Grafik asosida quyidagilarni aniqlang: 1) Funksiya grafigi koordinata tekisligining qaysi choraklarida o‘tishini; 2) Koordinata o‘qlari bilan kesishish nuqtalari; 3) Aniqlanish sohasi (ya’ni, x ning qanday qiymatlari uchun funksiya mavjud); 4) Qiymatlar to‘plami (ya’ni, y qanday qiymatlar qabul qiladi); 5) O‘sish va kamayish oraliqlari;" },
            { id: 12, text: "12. y=-2x^2-8x funksiya grafigini chizing. Grafik asosida quyidagilarni aniqlang: 1) Funksiya grafigi koordinata tekisligining qaysi choraklarida o‘tishini; 2) Koordinata o‘qlari bilan kesishish nuqtalari; 3) Aniqlanish sohasi (ya’ni, x ning qanday qiymatlari uchun funksiya mavjud); 4) Qiymatlar to‘plami (ya’ni, y qanday qiymatlar qabul qiladi); 5) O‘sish va kamayish oraliqlari;" },
            { id: 13, text: "13. y=x^2-6x+8 funksiya grafigini chizing. Grafik asosida quyidagilarni aniqlang: 1) Funksiya grafigi koordinata tekisligining qaysi choraklarida o‘tishini; 2) Koordinata o‘qlari bilan kesishish nuqtalari; 3) Aniqlanish sohasi (ya’ni, x ning qanday qiymatlari uchun funksiya mavjud); 4) Qiymatlar to‘plami (ya’ni, y qanday qiymatlar qabul qiladi); 5) O‘sish va kamayish oraliqlari;" },
            { id: 14, text: "14. y=-x^2+4x-3 funksiya grafigini chizing. Grafik asosida quyidagilarni aniqlang: 1) Funksiya grafigi koordinata tekisligining qaysi choraklarida o‘tishini; 2) Koordinata o‘qlari bilan kesishish nuqtalari; 3) Aniqlanish sohasi (ya’ni, x ning qanday qiymatlari uchun funksiya mavjud); 4) Qiymatlar to‘plami (ya’ni, y qanday qiymatlar qabul qiladi); 5) O‘sish va kamayish oraliqlari;" },
            { id: 15, text: "15. y=0,5x^2-8 funksiya grafigini chizing. Grafik asosida quyidagilarni aniqlang: 1) Funksiya grafigi koordinata tekisligining qaysi choraklarida o‘tishini; 2) Koordinata o‘qlari bilan kesishish nuqtalari; 3) Aniqlanish sohasi (ya’ni, x ning qanday qiymatlari uchun funksiya mavjud); 4) Qiymatlar to‘plami (ya’ni, y qanday qiymatlar qabul qiladi); 5) O‘sish va kamayish oraliqlari;" },
            { id: 16, text: "16. y=-3x^2+6x funksiya grafigini chizing. Grafik asosida quyidagilarni aniqlang: 1) Funksiya grafigi koordinata tekisligining qaysi choraklarida o‘tishini; 2) Koordinata o‘qlari bilan kesishish nuqtalari; 3) Aniqlanish sohasi (ya’ni, x ning qanday qiymatlari uchun funksiya mavjud); 4) Qiymatlar to‘plami (ya’ni, y qanday qiymatlar qabul qiladi); 5) O‘sish va kamayish oraliqlari;" },
            { id: 17, text: "17. y=x^2+2x-8 funksiya grafigini chizing. Grafik asosida quyidagilarni aniqlang: 1) Funksiya grafigi koordinata tekisligining qaysi choraklarida o‘tishini; 2) Koordinata o‘qlari bilan kesishish nuqtalari; 3) Aniqlanish sohasi (ya’ni, x ning qanday qiymatlari uchun funksiya mavjud); 4) Qiymatlar to‘plami (ya’ni, y qanday qiymatlar qabul qiladi); 5) O‘sish va kamayish oraliqlari;" },
            { id: 18, text: "18. y=-x^2+6x-8 funksiya grafigini chizing. Grafik asosida quyidagilarni aniqlang: 1) Funksiya grafigi koordinata tekisligining qaysi choraklarida o‘tishini; 2) Koordinata o‘qlari bilan kesishish nuqtalari; 3) Aniqlanish sohasi (ya’ni, x ning qanday qiymatlari uchun funksiya mavjud); 4) Qiymatlar to‘plami (ya’ni, y qanday qiymatlar qabul qiladi); 5) O‘sish va kamayish oraliqlari;" },
            { id: 19, text: "19. y=3x^2-3 funksiya grafigini chizing. Grafik asosida quyidagilarni aniqlang: 1) Funksiya grafigi koordinata tekisligining qaysi choraklarida o‘tishini; 2) Koordinata o‘qlari bilan kesishish nuqtalari; 3) Aniqlanish sohasi (ya’ni, x ning qanday qiymatlari uchun funksiya mavjud); 4) Qiymatlar to‘plami (ya’ni, y qanday qiymatlar qabul qiladi); 5) O‘sish va kamayish oraliqlari;" },
            { id: 20, text: "20. y=3x^2+6x funksiya grafigini chizing. Grafik asosida quyidagilarni aniqlang: 1) Funksiya grafigi koordinata tekisligining qaysi choraklarida o‘tishini; 2) Koordinata o‘qlari bilan kesishish nuqtalari; 3) Aniqlanish sohasi (ya’ni, x ning qanday qiymatlari uchun funksiya mavjud); 4) Qiymatlar to‘plami (ya’ni, y qanday qiymatlar qabul qiladi); 5) O‘sish va kamayish oraliqlari;" }
          ],
          5: [
            { id: 1,  text: "1. Belgilangan ishni 15 kishi 12 kunda bajarishi mumkin. 4 kun ishlagandan so‘ng, beshinchi kuni ularga yordam berish uchun 5 kishi kelib qo‘shildi. Qolgan ish necha kunda tugatilgan?" },
            { id: 2,  text: "2. A va B shaharlar orasidagi masofa 210 km. A shahardan piyoda sayohatchi, B shahardan esa elektrovelosipedchi bir vaqtning o‘zida yo‘lga chiqishadi. Ular uchrashganida sayohatchi 42 km yo‘l bosgan bo‘ladi. Agar sayohatchining tezligi 6 km/h bo‘lsa, elektrovelosipedchining tezligini toping." },
            { id: 3,  text: "3. Laylo 5 kishidan iborat oilasi uchun palov tayyorlamoqchi bo‘lib, 500 gramm go‘sht sotib oladi. Ertasi kuni ularga 15 nafar mehmon kelishi ma’lum bo‘ldi. Laylo palovni barchaga tayyorlashi uchun qancha go‘sht sotib olishi kerak?" },
            { id: 4,  text: "4. Suv sarfi birinchi oyda 10 % ga kamaydi, ikkinchi oyda esa yana 15 % ga kamaydi. Ikki oy davomida suv sarfi jami necha foizga kamaygan?" },
            { id: 5,  text: "5. Bir ishni 10 kishi 8 kunda bajara oladi. 2 kundan so‘ng (uchinchi kuni) ularga yordam berish uchun bir nechta kishi kelib qo‘shildi va qolgan ish 4 kunda bajarildi. Nechta kishi kelib qo‘shilgan?" },
            { id: 6,  text: "6. Maktabdan uyga 12 km masofa bor. O‘quvchi va o‘qituvchi bir vaqtning o‘zida, biri maktabdan uyga, boshqasi uydan maktabga qarab yo‘lga chiqdi. Ular uchrashganda o‘quvchi 4 km yurgan bo‘ladi. Agar o‘quvchi 4 km/h tezlikda yurgan bo‘lsa, o‘qituvchining tezligini toping." },
            { id: 7,  text: "7. Taxmina 4 kishidan iborat oilasi uchun palov tayyorlamoqchi bo‘lib, 500 gramm go‘sht sotib oladi. Ertasi kuni ularga 12 nafar mehmon kelishi ma’lum bo‘ldi. Taxmina palovni barchaga tayyorlashi uchun qancha go‘sht sotib olishi kerak?" },
            { id: 8,  text: "8. Suv sarfi birinchi oyda 15 % ga kamaydi, ikkinchi oyda esa yana 10 % ga kamaydi. Ikki oy davomida suv sarfi jami necha foizga kamaygan?" },
            { id: 9,  text: "9. Ishchilar belgilangan vazifani 15 kunda bajara olishadi, 5 kundan so‘ng ularga yana 8 kishi qo‘shildi va birgalikda qolgan ishni 6 kunda tugallashdi. Ishchilar dastlab necha kishi edilar?" },
            { id: 10, text: "10. Daryo bo‘yidagi yugurish yo‘lagi 15 km. Ikki do‘st daryoning qarama-qarshi uchidan bir vaqtning o‘zida yugurishga tushdi. Ular uchrashganda biri 6 km bosib o‘tgan bo‘ladi. Agar uning tezligi 8 km/h bo‘lsa, ikkinchi do‘stning tezligini toping." },
            { id: 11, text: "11. Oilasi uchun palov tayyorlashda Feruza 900 gramm go‘sht sotib oladi (bu palov Feruza, eri va 4 farzandi uchun mo‘ljallangan). Ertaga ularga 12 nafar mehmon keladi. Feruza palovni barchaga tayyorlaydi. U qancha go‘sht sotib olishi kerak?" },
            { id: 12, text: "12. Bir IT kompaniyasining foydasi birinchi chorakda 25 %, ikkinchi chorakda esa 30 % ga oshdi. Ikki chorak natijasida kompaniya foydasi jami necha foizga ortdi?" },
            { id: 13, text: "13. Bir noutbukni faqat video ko‘rib ishlatilsa, batareya 4 soatga yetadi. Agar video bilan birga yuklab olish (download) ham ishlatilsa, zaryad atigi 2 soatga yetadi. Noutbukni faqat yuklab olish rejimida ishlatilsa, zaryadi necha soatga yetadi?" },
            { id: 14, text: "14. Ona uydan maktabga qarab 3 km/h tezlikda yura boshladi. Shu vaqtda farzandi maktabdan uyga qarab velosipedda yo‘lga chiqdi. Uy va maktab orasidagi masofa 18 km. Ular uchrashganda ona 6 km yo‘l yurgan bo‘lса, bolaning tezligini toping." },
            { id: 15, text: "15. Oilasi uchun palov tayyorlashda Shaxlo 700 gramm guruch sotib oladi (bu palov Shaxlo, eri va 3 farzandi uchun mo‘ljallangan). Ertaga ularga 15 nafar mehmon keladi. Shaxlo palovni barchaga tayyorlaydi. U qancha guruch sotib olishi kerak?" },
            { id: 16, text: "16. Uyali aloqa operatori bir oyda internet tezligini 50 % ga oshirdi, keyingi oyda esa 20 % ga kamaytirdi. Natijada umumiy internet tezligi dastlabki tezlikka nisbatan qanday foiz o‘zgarishga uchradi?" },
            { id: 17, text: "17. Jamshidning telefonida 5 GB internet bor. Agar u faqat YouTube ko‘rsa, bu internet unga 10 soatga yetadi. Agar YouTube va onlayn o‘yin o‘ynasa, 4 soatga yetadi. Unda faqat onlayn o‘yin o‘ynasa, internet necha soatga yetadi?" },
            { id: 18, text: "18. Toshkent va Samarqand orasidagi masofa 300 km. Bir vaqtning o‘zida qarama-qarshi yo‘nalishda yuk mashinasi va avtomobil yo‘lga chiqdi. Ular uchrashganda yuk mashinasi 120 km yurgan bo‘ladi. Agar yuk mashinasining tezligi 60 km/h bo‘lsa, avtomobilning tezligini toping." },
            { id: 19, text: "19. Oilasi uchun palov tayyorlashda Zuxra 900 gramm guruch sotib oladi (bu palov Zuxra, eri va 4 farzandi uchun mo‘ljallangan). Ertaga ularga 18 nafar mehmon keladi. Zuxra palovni barchaga tayyorlaydi. U qancha guruch sotib olishi kerak?" },
            { id: 20, text: "20. Bir do‘kondagi mahsulot narxi birinchi haftada 10 % ga arzonlashtirildi, ikkinchi haftada esa yana 20 % ga arzonlashtirildi. Umumiy narx kamayishi necha foizni tashkil qiladi?" }
          ],
          6: [
            { id: 1,  text: "1. Tenglamani yeching: x^2+|x|=6" },
            { id: 2,  text: "2. Tenglamani yeching: (x+3)/2+(x-1)/4=(x+7)/6+1" },
            { id: 3,  text: "3. Tenglamani yeching: x=5+4√x" },
            { id: 4,  text: "4. Tenglamani yeching: |7x-13|=15" },
            { id: 5,  text: "5. Tenglamani yeching: x^2-7|x|+6=0" },
            { id: 6,  text: "6. Tenglamani yeching: (x-2)/3+(x+4)/6=(x+10)/4+1" },
            { id: 7,  text: "7. Tenglamani yeching: x-12√x+35=0" },
            { id: 8,  text: "8. Tenglamani yeching: |11x+22|=33" },
            { id: 9,  text: "9. Tenglamani yeching: x^2-4|x|=21" },
            { id: 10, text: "10. Tenglamani yeching: (x+5)/5+(x-3)/3=(x+7)/2+1" },
            { id: 11, text: "11. Tenglamani yeching: 2x-1=3√(2x-1)" },
            { id: 12, text: "12. Tenglamani yeching: |24-8x|=31" },
            { id: 13, text: "13. Tenglamani yeching: x^2-|x-5|=5" },
            { id: 14, text: "14. Tenglamani yeching: (x-6)/4+(x+2)/6=(x+1)/3+2" },
            { id: 15, text: "15. Tenglamani yeching: x^4-26x^2+25=0" },
            { id: 16, text: "16. Tenglamani yeching: |9x+14|=29" },
            { id: 17, text: "17. Tenglamani yeching: x^2+|x-4|=4" },
            { id: 18, text: "18. Tenglamani yeching: (x+1)/2+(x-2)/5=(x+3)/3+1" },
            { id: 19, text: "19. Tenglamani yeching: x^4-13x^2+36=0" },
            { id: 20, text: "20. Tenglamani yeching: |12-5x|=8" }
          ],
          7: [
            { id: 1,  text: "1. Tengsizliklar sistemasini yeching: {5(x+1)-x>7x-8; 4x+2≤2(2x+1)-x}" },
            { id: 2,  text: "2. Tengsizlikni yeching: 2x^2-5x+2≥0." },
            { id: 3,  text: "3. Tengsizlikni yeching: 1≤-2x+3<7." },
            { id: 4,  text: "4. Tengsizlikni yeching: |1-3x|≤2." },
            { id: 5,  text: "5. Tengsizliklar sistemasini yeching: {2(x-1)-3>3x-5; 3x+1≤6(1-x)+7x}" },
            { id: 6,  text: "6. Tengsizlikni yeching: 3x^2+2x-1<0." },
            { id: 7,  text: "7. Tengsizlikni yeching: 1≤-3x+4<10." },
            { id: 8,  text: "8. Tengsizlikni yeching: |4x-1|<17." },
            { id: 9,  text: "9. Tengsizliklar sistemasini yeching: {(x-5)/2>(1-2x)/3; (x+2)/3>(x-3)/2}" },
            { id: 10, text: "10. Tengsizlikni yeching: 4x^2-4x-3≥0." },
            { id: 11, text: "11. Tengsizlikni yeching: 1≤-2x+5<7." },
            { id: 12, text: "12. Tengsizlikni yeching: |4x-3|≥13." },
            { id: 13, text: "13. Tengsizliklar sistemasini yeching: {(3x-5)/2<(1+2x)/3; (3x-3)/2>(2x+2)/3}" },
            { id: 14, text: "14. Tengsizlikni yeching: 6x^2-7x-5>0." },
            { id: 15, text: "15. Tengsizlikni yeching: 2<-3x+8≤11" },
            { id: 16, text: "16. Tengsizlikni yeching: |3x+2|>1." },
            { id: 17, text: "17. Tengsizliklar sistemasini yeching: {3x-5≥x-9; 2x+7<3x+9; 8-5x>2-4x}" },
            { id: 18, text: "18. Tengsizlikni yeching: 6x^2-7x+2<0." },
            { id: 19, text: "19. Tengsizlikni yeching: 1<-3x+10≤13." },
            { id: 20, text: "20. Tengsizlikni yeching: |2-5x|≥3." }
          ],
          8: [
            { "id": 1, "text": "1. Dasturlash va ingliz tili kurslari. Alisher 3 ta dasturlash kursi va 2 ta ingliz tili kursiga yozilib, 500000 so‘m to‘ladi. Nodira esa 2 ta dasturlash va 4 ta ingliz tili kursiga 520000 so‘m to‘ladi. Har bir kurs qancha turadi?" },
            { "id": 2, "text": "2. Fan to‘plamlari. Komil matematika bo‘yicha 2 ta va fizika bo‘yicha 3 ta test to‘plami sotib olib, 85000 so‘m to‘ladi. Dildora 3 ta matematika va 1 ta fizika to‘plamiga 75000 so‘m to‘ladi. Har bir fan test to‘plamining narxini toping." },
            { "id": 3, "text": "3. Elektron qurilmalar. Bahodir 1 ta planshet va 2 ta simsiz quloqchin olib, 3200000 so‘m to‘ladi. Sohiba esa 2 ta planshet va 1 ta quloqchin uchun 4100000 million so‘m to‘ladi. 1 ta planshet va 1 ta simsiz quloqchin narxini toping." },
            { "id": 4, "text": "4. Robototexnika darslari. Maktabda 4 ta elektronika to‘plami va 3 ta datchik to‘plamiga 260000 so‘m to‘landi. Boshqa bir maktab 2 ta elektronika to‘plami va 4 ta datchik to‘plami uchun 240000 so‘m to‘ladi. Har bir to‘plamning narxini toping." },
            { "id": 5, "text": "5. Kutubxona obunasi. Ikrom 5 ta ilmiy jurnal va 2 ta badiiy kitob uchun 145000 so‘m to‘ladi. Lola 3 ta jurnal va 4 ta kitob uchun 155000 so‘m to‘ladi. Har birining narxini toping." },
            { "id": 6, "text": "6. Xarid masalasi. Javohir supermarketdan 3 kg olma va 2 kg banan xarid qilib, jami 46000 so‘m to‘ladi. Uning ukasi Diyor esa 2 kg olma va 4 kg banan olib, 56000 so‘m to‘ladi. 1 kg olma va 1 kg banan narxini toping." },
            { "id": 7, "text": "7. Ta’lim grantlari. Ilmiy tanlovda g‘olib bo‘lgan o‘quvchilardan biri 2 ta grant va 3 ta sertifikat uchun 560000 so‘m mukofot oldi. Boshqasi 4 ta grant va 1 ta sertifikat uchun 700000 so‘m oldi. Grant va sertifikat uchun beriladigan mukofat pullarini aniqlang." },
            { "id": 8, "text": "8. Mobil ilovalar obunasi. Javohir bir oyda 2 ta til o‘rganish va 4 ta texnologik ilovaga obuna bo‘lib, 120000 so‘m to‘ladi. Nilufar esa 3 ta til va 1 ta texnologik ilovaga 110000 so‘m to‘ladi. Har bir ilova obunasi necha so‘m?" },
            { "id": 9, "text": "9. Olimpiada tayyorlov. Ilyos 3 ta fizika va 2 ta informatika darsida qatnashib, 230000 so‘m to‘ladi. Matluba 4 ta fizika va 3 ta informatika darsiga 340000 so‘m to‘lagan. Har bir fan uchun dars narxini aniqlang." },
            { "id": 10, "text": "10. Kompyuter kurslari. Umida 2 ta grafik dizayn va 5 ta ofis dasturlari bo‘yicha kursga yozilib, 400000 so‘m to‘ladi. Sardor esa 4 ta grafik va 2 ta ofis kursiga 440000 so‘m to‘laydi. Har bir kursning narxini toping." },
            { "id": 11, "text": "11. Xalqaro sertifikat imtihonlari. Aziz 1 ta IELTS va 2 ta ICDL imtihoni uchun 2400000 so‘m to‘ladi. Sevinch 2 ta IELTS va 1 ta ICDL uchun 3000000 so‘m to‘ladi. Har bir imtihon narxini toping." },
            { "id": 12, "text": "12. Vebinar to‘plami. 3 ta marketing vebinari va 4 ta IT vebinari 280000 so‘mga tushdi. 2 ta marketing va 2 ta IT vebinari 180000 so‘m bo‘ldi. Har bir vebinarning narxini aniqlang." },
            { "id": 13, "text": "13. Kompyuter jihozlari. Nodir 2 ta sichqoncha va 3 ta klaviaturaga 460000 so‘m to‘ladi. Akmal esa 3 ta sichqoncha va 1 ta klaviaturaga 410000 so‘m to‘ladi. Har birining narxini toping." },
            { "id": 14, "text": "14. Robot kurslari ishtiroki. Azamat 4 ta nazariy va 2 ta amaliy darsga qatnashib, 500000 so‘m to‘ladi. Shahlo 3 ta nazariy va 4 ta amaliy darsga 640000 so‘m to‘lagan. Har bir dars turi narxini toping." },
            { "id": 15, "text": "15. Elektron kitoblar. Muhammad 5 ta biologiya va 2 ta kimyo elektron kitobini 155000 so‘mga sotib oldi. Durdona esa 3 ta biologiya va 3 ta kimyo kitobiga 165000 so‘m to‘lagan. Har birining narxini toping." },
            { "id": 16, "text": "16. Coding bootcamp. Bekzod 2 oy Python, 3 oy JavaScript kursiga qatnashib, 780000 so‘m to‘ladi. Akrom esa 4 oy Python va 1 oy JavaScript uchun 760000 so‘m to‘lagan. Har bir kursning bir oylik narxini aniqlang." },
            { "id": 17, "text": "17. Til bilish platformasi. 2 oy ingliz va 3 oy nemis tilini o‘rgangan o‘quvchi 630000 so‘m to‘lagan. 4 oy ingliz va 1 oy nemis tilini o‘rgangan o‘quvchi 610000 so‘m to‘lagan. Har bir til kursi uchun oyiga necha so‘m turadi?" },
            { "id": 18, "text": "18. Elektron doskalar va proyektorlar. Bir maktab 2 ta elektron doska va 1 ta proyektorga 6,5 million so‘m to‘ladi. Boshqa maktab 3 ta doska va 2 ta proyektorga 10 million so‘m to‘lagan. Elektron doska va proyektor narxini toping." },
            { "id": 19, "text": "19. Dasturiy litsenziyalar. Muassasa 5 ta antivirus va 3 ta ofis dasturi uchun 870000 so‘m to‘ladi. Boshqa tashkilot 2 ta antivirus va 4 ta ofis dasturiga 740000 to‘lagan. Har birining narxini toping." },
            { "id": 20, "text": "20. O‘quv fanlariga tayyorlov. Ziyod 3 ta tarix va 2 ta geografiya kursiga qatnashib, 460000 so‘m to‘lagan. Umid 2 ta tarix va 3 ta geografiya uchun 430000 so‘m to‘ladi. Har bir kurs qancha turadi?" }
          ],
           9: [
            { id: 1,  text: "1. Agar cosα = -√7/4 va π/2 < α < π bo‘lsa, sinα va tgα ni toping." },
            { id: 2,  text: "2. Agar sinα = (2√2)/3 va π/2 < α < π bo‘lsa, cosα va tgα ni toping." },
            { id: 3,  text: "3. Agar cosα = -3/5 va π < α < 3π/2 bo‘lsa, sinα va tgα ni toping." },
            { id: 4,  text: "4. Agar sinα = - (2√5)/6 va -π/2 < α < 0 bo‘lsa, cosα va tgα ni toping." },
            { id: 5,  text: "5. Agar cosα = - (2√6)/5 va π/2 < α < π bo‘lsa, sinα va tgα ni toping." },
            { id: 6,  text: "6. Agar sinα = √15/4 va π/2 < α < π bo‘lsa, cosα va tgα ni toping." },
            { id: 7,  text: "7. Agar cosα = -4/5 va π < α < 3π/2 bo‘lsa, sinα va tgα ni toping." },
            { id: 8,  text: "8. Agar sinα = - (2√10)/7 va -π/2 < α < 0 bo‘lsa, cosα va tgα ni toping." },
            { id: 9,  text: "9. Agar cosα = -1/3 va π/2 < α < π bo‘lsa, sinα va tgα ni toping." },
            { id: 10, text: "10. Agar sinα = √7/4 va π/2 < α < π bo‘lsa, cosα va tgα ni toping." },
            { id: 11, text: "11. Agar cosα = -5/13 va π < α < 3π/2 bo‘lsa, sinα va tgα ni toping." },
            { id: 12, text: "12. Agar sinα = -√21/5 va -π/2 < α < 0 bo‘lsa, cosα va tgα ni toping." },
            { id: 13, text: "13. Agar cosα = -2/5 va π/2 < α < π bo‘lsa, sinα va tgα ni toping." },
            { id: 14, text: "14. Agar sinα = (2√6)/7 va π/2 < α < π bo‘lsa, cosα va tgα ni toping." },
            { id: 15, text: "15. Agar cosα = -12/13 va π < α < 3π/2 bo‘lsa, sinα va tgα ni toping." },
            { id: 16, text: "16. Agar sinα = -√11/6 va -π/2 < α < 0 bo‘lsa, cosα va tgα ni toping." },
            { id: 17, text: "17. Agar cosα = -2/3 va π/2 < α < π bo‘lsa, sinα va tgα ni toping." },
            { id: 18, text: "18. Agar sinα = √11/6 va π/2 < α < π bo‘lsa, cosα va tgα ni toping." },
            { id: 19, text: "19. Agar cosα = -24/25 va π < α < 3π/2 bo‘lsa, sinα va tgα ni toping." },
            { id: 20, text: "20. Agar sinα = - (2√2)/3 va -π/2 < α < 0 bo‘lsa, cosα va tgα ni toping." }
          ],
          10: [
            { id: 1,  text: "1. Asror 10 kun davomida matematikadan berilgan mustaqil ish topshiriqlarini to’liq bajarib tugatishni reja qildi. U birinchi kuni 7 ta topshiriqni bajardi. Ikkinchi kundan boshlab har kuni bir kun oldingi bajargan topshiriqlar sonini 3 ta ga orttirib bajara boshladi. Asror rejasini belgilagan muddatda amalga oshirgan bo‘lsa, unga mustaqil ish uchun nechta topshiriq berilganligini aniqlang." },
            { id: 2,  text: "2. Bir bog‘bon bahor mavsumida har kuni ko‘proq ko‘chat ekishga qaror qildi. U birinchi kuni 6 ta ko‘chat ekdi. Ikkinchi kundan boshlab har kuni oldingi kunga nisbatan 4 tadan ko‘proq ekib bordi. Agar u bu ishni 9 kun davomida bajargan bo‘lsa, jami nechta ko‘chat ekkan?" },
            { id: 3,  text: "3. Bir ustaxona ishchisi har kuni detallar yig‘ishni ko‘paytirib bordi. Birinchi kuni 15 ta detal yig‘di. Ikkinchi kundan boshlab har kuni avvalgi kunga qaraganda 2 ta ko‘proq detal yig‘di. Agar ishchi 10 kun ishlagan bo‘lsa, jami nechta detal yig‘gan?" },
            { id: 4,  text: "4. Bir rassom yangi kolleksiya ustida ishlamoqda. U birinchi kuni 3 ta eskiz chizdi. Ikkinchi kundan boshlab har kuni avvalgi kundagiga nisbatan 1 ta ortiq eskiz chizadi. Rassom 14 kun davomida shu tempda ishlagan bo‘lsa, jami nechta eskiz chizilgan?" },
            { id: 5,  text: "5. Bir talaba kurs ishining yozma qismini bo‘lib-bo‘lib bajarishga qaror qildi. Birinchi kuni 250 ta so‘z yozdi, ikkinchi kundan boshlab har kuni avvalgi kundan 100 ta so‘z ko‘proq yozib bordi. 7 kun ichida u kurs ishining jami nechta so‘zini yozgan?" },
            { id: 6,  text: "6. Bir laboratoriyada o‘stirilayotgan o‘simlik har 2 kunda shunchalik tez rivojlanadiki, barglar soni har 2 kunda 3 baravarga oshadi. 1-aprelda o‘simlikda 8 ta barg bo‘lsa, 7-aprelga kelib nechta barg bo‘ladi?" },
            { id: 7,  text: "7. Bir blogerning YouTube kanali tez ommalashmoqda. Obunachilar soni har 3 kunda 2 baravarga ortmoqda. 1-fevralda 500 nafar obunachisi bor edi. 13-fevralga kelib kanalida nechta obunachi bo‘ladi?" },
            { id: 8,  text: "8. Bir ilmiy tajribada bakteriyalar har 4 soatda 3 baravarga ko‘paymoqda. Tajriba boshida 100 ta bakteriya bo‘lgan bo‘lsa, 16 soatdan keyin ularning soni nechta bo‘ladi?" },
            { id: 9,  text: "9. Bir talaba o‘zining loyiha faylini fleshka orqali do‘stlariga tarqatmoqda. Har bir olgan kishi keyingi kuni yana 2 kishiga tarqatadi va ertasi kuni yana shu jarayon davom etadi. Agar boshlang‘ichda 1 ta nusxa bo‘lgan bo‘lsa, 7-kuni tarqatilgan nusxalar soni nechta bo‘ladi?" },
            { id: 10, text: "10. Bir yolg‘on xabar telegramda har 6 soatda ikki baravarga ko‘payib tarqalmoqda. 1-aprel soat 00:00 da 5 kishiga yetgan bo‘lsa, 2-aprel 00:00 ga kelib nechta kishiga yetadi?" },
            { id: 11, text: "11. Doston har kuni dars o‘qish vaqtini oshirib boradi. U birinchi kuni 20 daqiqa o‘qidi. Ikkinchi kundan boshlab har kuni avvalgi kunga qaraganda 5 daqiqa orttirdi. 12-kuni u nechta daqiqa o‘qigan?" },
            { id: 12, text: "12. Malika sog‘lig‘i uchun har kuni yurish masofasini oshirib bordi. Birinchi kuni 1 km yurdi. Ikkinchi kundan boshlab har kuni avvalgi kunga qaraganda, har kuni 0,3 km orttirdi. 15-kuni u necha kilometr yurdi?" },
            { id: 13, text: "13. Sevara ingliz tilidan so‘z yodlashni boshladi. Birinchi kuni 8 ta so‘z yodladi. Ikkinchi kundan boshlab har kuni avvalgi kunga qaraganda 2 tadan ko‘proq so‘z yodlab bordi. 15-kuni nechta so‘z yodlagan?" },
            { id: 14, text: "14. Ixtiyor oshpazlikni o‘rganmoqda. Birinchi kuni u 3 ta taom pishirishni o‘rgandi. Ikkinchi kundan boshlab har kuni 1 ta ko‘proq taom tayyorlashni o‘rgandi. 25-kuni nechta taom pishirishni o‘rgangan?" },
            { id: 15, text: "15. Laylo har kuni o‘ziga maqsad belgilab, uni bajarmoqda. Birinchi kuni 4 ta topshiriq bajardi. Ikkinchi kundan boshlab har kuni avvalgi kunga qaraganda 1 ta orttirib bordi. 18-kuni u nechtasini bajargan?" },
            { id: 16, text: "16. Bir daraxt urug‘i tuproqqa tushgandan so‘ng har bosqichda 2 ta yangi o‘simlik hosil qiladi. Boshlanishida 1 ta urug‘ bo‘lgan bo‘lsa, 7 bosqichda jami nechta o‘simlik yetishtiriladi?" },
            { id: 17, text: "17. Bir talaba onlayn kursdan mamnun bo‘lib, uni 2 do‘стiga tavsiya qiladi (bu bir bosqich). Har bir keyingi foydalanuvchi ham aynan 2 kishiga tavsiya qiladi. Boshlanishida 1 kishi tavsiya qilgan bo‘lsa, 6 bosqichdan keyin jami nechta odam bu kursdan xabardor bo‘lgan bo‘ladi?" },
            { id: 18, text: "18. Bir kompyuter virusi har 12 soatda 5 ta qurilmaga tarqalmoqda (bu bir bosqich). Boshlanishida faqat bitta qurilmaga tushgan bo‘lsa, 4 bosqichli tarqalishdan so‘ng jami nechta qurilmaga tarqaladi?" },
            { id: 19, text: "19. Bir yangi ochilgan podkast dastlab 1 kishi tomonidan tinglandi. Har haftada tinglovchilar soni 2 baravarga ortib bordi, chunki har bir tinglovchi uni ikki do‘стiga tavsiya qilardi. 6 haftadan keyin jami nechta tinglovchi podkastni eshitgan bo‘lishi mumkin?" },
            { id: 20, text: "20. Yerga yaqin orbitadagi sun’iy yo‘ldosh signalini yubordi. Signal har 2 soniyada 3 ta yangi qurilmaga yetadi va ular navbatdagi 2 soniyada yana 3 ta qurilmaga uzatadi. Agar dastlabki signal 1 ta qurilmaga tushgan bo‘lsa, 5 ta uzatish bosqichidan so‘ng jami nechta qurilmaga signal yetgan bo‘ladi?" }
          ],
          
          
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