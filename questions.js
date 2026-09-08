const questions = {
    english: [
        {
            question: "What is the name of our planet?",
            answers: [
                "Earth", "Venus", "Mercury", "Jupiter"
            ],
            correct: 0
        },
        {
            question: "What is the name of the closest planet to the sun?",
            answers: [
                "Earth", "Venus", "Mercury", "Jupiter"
            ],
            correct: 2
        },
        {
            question: "What is the name of the hottest planet in our solar system?",
            answers: [
                "Earth", "Venus", "Mercury", "Jupiter"
            ],
            correct: 1
        },
        {
            question: "How old is the Earth?",
            answers: [
                "About 3 million years old", "About 4 billion years old", "About 2000 years old", "About 100 million years old"
            ],
            correct: 1
        },
        {
            question: "What dwarf planet used to be a planet?",
            answers: [
                "Mercury", "Ceres", "Pluto", "Eris"
            ],
            correct: 2
        },
        {
            question: "In what galaxy are we located?",
            answers: [
                "Milky Way", "Andromeda Galaxy", "Solar Galaxy", "Triangulum Galaxy"
            ],
            correct: 0
        },
        {
            question: "Which planet is known as the \"Red Planet\"?",
            answers: [
                "Jupiter", "Mars", "Mercury", "Saturn"
            ],
            correct: 1
        },
        {
            question: "What moves around what in the Solar System?",
            answers: [
                "The sun moves around the earth, the moon moves around the sun",
                "The moon and the sun move around the earth",
                "The earth moves around the sun, the moon moves around the earth",
                "The moon moves around the sun, the earth stays still"
            ],
            correct: 2
        },
        {
            question: "What planet is famous for its big red spot?",
            answers: [
                "Mars", "Venus", "Jupiter", "Neptune"
            ],
            correct: 2
        },
        {
            question: "Venus and Earth have similar size and composition. Yet Venus is much, much hotter. Why?",
            answers: [
                "Venus's rotation is very fast",
                "Venus's magnetic field is very strong",
                "Venus's atmosphere is very thick",
                "Venus is closer to the Sun"
            ],
            correct: 2
        },
        {
            question: "How old is the Earth compared to the other Solar System planets?",
            answers: [
                "Earth is much younger", "Earth is much older", "Earth is the same age as other planets", "Earth doesn't have an age"
            ],
            correct: 2
        },
        {
            question: "How long does it take the Earth to travel once around the Sun?",
            answers: [
                "12 hours", "A day", "A year", "A decade"
            ],
            correct: 2
        },
        {
            question: "Why was Pluto reclassified as a dwarf planet?",
            answers: [
                "Pluto is too small", "It is too far from the earth", "It has other objects in its orbit", "It merged with another dwarf planet"
            ],
            correct: 2
        },
        {
            question: "What space objects are also known as \"dirty snowballs\"?",
            answers: [
                "Exoplanets", "Asteroid", "Comet", "Meteorite"
            ],
            correct: 2
        },
        {
            question: "Why do we always see the same side of the Moon?",
            answers: [
                "The moon is a hologram",
                "The far side of the moon absorbs light and is thus invisible",
                "The moon's rotation period coincides with its orbital period",
                "The moon doesn't rotate at all"
            ],
            correct: 2
        },
        {
            question: "What did the DART spacecraft do to the asteroids Dimorphos and Didymos?",
            answers: [
                "Blew them up with missiles",
                "Nothing, it missed",
                "Modified their trajectories",
                "Destroyed them completely"
            ],
            correct: 2
        },
        {
            question: "How do we tell the great comets from not-so-great ones?",
            answers: [
                "They are exceptionally big", "They are exceptionally fast", "They are exceptionally bright", "They are exceptionally colorful"
            ],
            correct: 2
        },
        {
            question: "What do we call a region of strong gravity from which nothing can escape?",
            answers: [
                "Nebula", "Galaxy", "Black hole", "Supernova"
            ],
            correct: 2
        },
        {
            question: "Are the Morning Star and Evening Star the same sky object?",
            answers: [
                "Yes, it is Jupiter", "No, they are Venus and Sirius", "Yes, it is Venus", "No, they are Mercury and Mars"
            ],
            correct: 2
        },
        {
            question: "Who is the first person to travel to space?",
            answers: [
                "Neil Armstrong", "Yuri Gagarin", "George Jetson", "Issac Newton"
            ],
            correct: 1
        }
    ],
    arabic: [
        {
            question: "ما هو اسم كوكبنا؟",
            answers: ["الأرض", "الزهرة", "عطارد", "المشتري"],
            correct: 0
        },
        {
            question: "ما هو اسم أقرب كوكب إلى الشمس؟",
            answers: ["الأرض", "الزهرة", "عطارد", "المشتري"],
            correct: 2
        },
        {
            question: "ما هو اسم الكوكب الأكثر حرارة في نظامنا الشمسي؟",
            answers: ["الأرض", "الزهرة", "عطارد", "المشتري"],
            correct: 1
        },
        {
            question: "كم عمر الأرض؟",
            answers: ["حوالي 3 ملايين سنة", "حوالي 4 مليار سنة", "حوالي 2000 سنة", "حوالي 100 مليون سنة"],
            correct: 1
        },
        {
            question: "ما هو الكوكب القزم الذي كان كوكبًا في الماضي؟",
            answers: ["عطارد", "سيريس", "بلوتو", "إيريس"],
            correct: 2
        },
        {
            question: "في أي مجرة نقع؟",
            answers: ["درب التبانة", "مجرة أندروميدا", "المجرة الشمسية", "مجرة المثلث"],
            correct: 0
        },
        {
            question: "ما هو الكوكب المعروف باسم \"الكوكب الأحمر\"؟",
            answers: ["المشتري", "المريخ", "عطارد", "زحل"],
            correct: 1
        },
        {
            question: "ماذا يدور حول ماذا في النظام الشمسي؟",
            answers: [
                "الشمس تدور حول الأرض، والقمر يدور حول الشمس",
                "القمر والشمس يدوران حول الأرض",
                "الأرض تدور حول الشمس، والقمر يدور حول الأرض",
                "القمر يدور حول الشمس، والأرض ثابتة"
            ],
            correct: 2
        },
        {
            question: "أي كوكب يشتهر ببقعته الحمراء الكبيرة؟",
            answers: ["المريخ", "الزهرة", "المشتري", "نبتون"],
            correct: 2
        },
        {
            question: "الزهرة والأرض متشابهتان في الحجم والتركيب، لكن الزهرة أكثر سخونة بكثير. لماذا؟",
            answers: [
                "دوران الزهرة سريع جدًا",
                "المجال المغناطيسي للزهرة قوي جدًا",
                "غلاف الزهرة الجوي كثيف جدًا",
                "الزهرة أقرب إلى الشمس"
            ],
            correct: 2
        },
        {
            question: "كم عمر الأرض مقارنة بكواكب المجموعة الشمسية الأخرى؟",
            answers: [
                "الأرض أصغر بكثير",
                "الأرض أكبر بكثير",
                "الأرض بنفس عمر الكواكب الأخرى",
                "الأرض ليس لها عمر"
            ],
            correct: 2
        },
        {
            question: "كم من الوقت تستغرق الأرض للدوران حول الشمس مرة واحدة؟",
            answers: ["12 ساعة", "يوم واحد", "سنة واحدة", "عقد من الزمن"],
            correct: 2
        },
        {
            question: "لماذا أعيد تصنيف بلوتو ككوكب قزم؟",
            answers: [
                "بلوتو صغير جدًا",
                "إنه بعيد جدًا عن الأرض",
                "لديه أجسام أخرى في مداره",
                "اندمج مع كوكب قزم آخر"
            ],
            correct: 2
        },
        {
            question: "ما هي الأجسام الفضائية التي تُعرف أيضًا باسم \"كرات الثلج القذرة\"؟",
            answers: ["كواكب خارج المجموعة الشمسية", "كويكب", "مذنب", "نيزك"],
            correct: 2
        },
        {
            question: "لماذا نرى دائمًا نفس الوجه من القمر؟",
            answers: [
                "القمر هو صورة ثلاثية الأبعاد",
                "الجانب البعيد من القمر يمتص الضوء وبالتالي غير مرئي",
                "فترة دوران القمر حول نفسه تتطابق مع فترة دورانه حول الأرض",
                "القمر لا يدور حول نفسه على الإطلاق"
            ],
            correct: 2
        },
        {
            question: "ماذا فعلت مركبة -دارت- بالكويكبين ديمورفرس رديديموس",
            answers: [
                "فجّرتهما بالصواريخ",
                "لا شيء، لقد أخطأت الهدف",
                "غيّرت مسارهما",
                "دمّرتهما بالكامل"
            ],
            correct: 2
        },
        {
            question: "كيف نميز المذنبات العظيمة عن غيرها؟",
            answers: [
                "تكون كبيرة الحجم بشكل استثنائي",
                "تكون سريعة بشكل استثنائي",
                "تكون ساطعة بشكل استثنائي",
                "تكون ملونة بشكل استثنائي"
            ],
            correct: 2
        },
        {
            question: "ماذا نسمي المنطقة ذات الجاذبية القوية التي لا يمكن لأي شيء الإفلات منها؟",
            answers: ["سديم", "مجرة", "ثقب أسود", "مستعر أعظم"],
            correct: 2
        },
        {
            question: "هل نجمة الصباح ونجمة المساء هما نفس الجرم السماوي؟",
            answers: [
                "نعم، إنه المشتري",
                "لا، إنهما الزهرة والشعرى",
                "نعم، إنه الزهرة",
                "لا، إنهما عطارد والمريخ"
            ],
            correct: 2
        },
        {
            question: "من هو أول شخص يسافر إلى الفضاء؟",
            answers: [
                "نيل أرمسترونغ", "يوري غاغارين", "جورج جيتسون", "إسحاق نيوتن"
            ],
            correct: 1
        }
    ]
};