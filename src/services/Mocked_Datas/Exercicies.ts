import { ExercisesArray } from "@/Types/exercisies";

export const exercicies: ExercisesArray = [

  ////////////////////////////// LIÇÕES DO CAPITULO 1 /////////////////////////////////////

    {
      id: "1",
      chapter_id:"1",
      type: "verticalFillBox",
      title: "Match the Job Titles",
      questions: [
        {
          question: "Helps Passengers on the Plane",
          correct_answer: ["Flight Deck Crew"],
        },
        { question: "Leads the Cabin Team", correct_answer: ["Chief Purser"] },
        { question: "Flies the Plane", correct_answer: ["Captain"] },
        { question: "Works in the Cockpit", correct_answer: ["Ground Staff"] },
        { question: "Works at the Airport", correct_answer: ["Cabin Crew"] },
      ],
      suggestions: [
        "Flight Deck Crew",
        "Chief Purser",
        "Captain",
        "Ground Staff",
        "Cabin Crew",
      ],
      correct_answer: [
        "Flight Deck Crew",
        "Chief Purser",
        "Captain",
        "Ground Staff",
        "Cabin Crew",
      ],
    },
    {
      id: "2",
      chapter_id:"1",
      type: "alternatives",
      title: "Who Does What?",
      title_audio_url: "",
      description: "Who leads the pre-flight briefing?",
      img_url: "",
      isOnRecheck: false,
      questions: [
        { letter: "A", question: "Chief Purser", question_audio_url: "" },
        { letter: "B", question: "Captain", question_audio_url: "" },
        { letter: "C", question: "Ground Staff", question_audio_url: "" },
        { letter: "D", question: "Gallery Operator", question_audio_url: "" },
        { letter: "E", question: "Aircraft Engineer", question_audio_url: "" },
      ],
      correct_answer: "B", // Resposta correta
    },
    {
      id: "nrILaRYUczlbk9cJqJ1r",
      chapter_id:"1",
      type: "fillboxWithOptions",
      description: "Match the emojis with words",
      title: "Weather Condition",
      image_url: "http://domain/image.png",
      audio_url: "http://domain/image.png",
      correct_answer: ["sun", "turbulence", "cloudy", "rainy", "stormy"],
      questions: ["Turbulence", "Clear Weather", "Cloudy", "Rainy", "Stormy"],
      difficulty: "HARD",
      is_Premium: true,
      created_at: "2024-11-24T21:21:04.006Z",
      updated_at: "2024-11-24T21:21:04.006Z",
      options: [
        {
          img: "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/sun.png",
          value: "sun",
        },
        {
          img: "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/wind-face.png",
          value: "turbulence",
        },
        {
          img: "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/cloud.png",
          value: "cloudy",
        },
        {
          img: "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/umbrella-with-rain-drops.png",
          value: "rainy",
        },
        {
          img: "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/high-voltage.png",
          value: "stormy",
        },
      ],
    },
    {
      id: "1",
      chapter_id:"1",
      type: "horizontalFillBox",
      title: "Weather Report",
      description: "Complete with: good, bad, clear, cloudy, rainy",
      img_url:
        "https://i.ibb.co/2nLngFG/with-luggage-aircraft-crew-work-uniform-is-together-outdoors-near-plane-1.png",
      question:
        "Today's weather is $ at departure and $ at arrival. The sky is $ now but will be $ later. We expect $ conditions during flight.",
      suggestions: ["Sunny", "Good", "Clear", "Cloudy", "Rainy"],
      correct_answer: ["Sunny", "Good", "Clear", "Cloudy", "Rainy"],
      audio_url:
        "https://firebasestorage.googleapis.com/v0/b/englishboard-c566e.appspot.com/o/audios%2Fexercicios%2FtodayWeathersExe.mp3?alt=media&token=4625e64f-b865-4973-8e03-339a3a44f428",
    },
    {
      id: "nrILaRYUczlbk9cJqJ1r",
      chapter_id:"1",
      type: "fillboxWithOptions",
      description: "Number these actions 1-5",
      title: "Put in order",
      image_url: "http://domain/image.png",
      audio_url: "http://domain/image.png",
      correct_answer: ["1", "2", "3", "4", "5"],
      questions: [
        "Check safety equipment",
        "Attend briefing",
        "Welcome passengers",
        "Put on uniform",
        "Report for duty",
      ],
      difficulty: "HARD",
      is_Premium: true,
      created_at: "2024-11-24T21:21:04.006Z",
      updated_at: "2024-11-24T21:21:04.006Z",
      options: [
        {
          img: "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/keycap-1.png",
          value: "1",
        },
        {
          img: "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/keycap-2.png",
          value: "2",
        },
        {
          img: "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/keycap-3.png",
          value: "3",
        },
        {
          img: "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/keycap-4.png",
          value: "4",
        },
        {
          img: "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/keycap-5.png",
          value: "5",
        },
      ],
    },

  /////////////////////////////////////////////////////////////////////////////////////

  


  ];