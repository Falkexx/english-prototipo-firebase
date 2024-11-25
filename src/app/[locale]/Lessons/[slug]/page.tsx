import ShowIntroduction from "../components/ShowIntroduction";
import IsAuthenticated from '@/services/IsAuthenticaded';

interface IntroductionProps {
  id: string;
  description: string;
  imgUrl: string;
  lessonId:string
}

async function page({ params }: { params: Promise<{ slug: string }> }) {
  await IsAuthenticated();
  const slug = (await params).slug; //Pegando o ID das lições

  const chapterIntroduction:IntroductionProps = {
    id: "1",
    description:
      "The Pre-Flight Briefing is an essential meeting conducted by the Chief Purser and the Captain before every flight. The Chief Purser leads this briefing to review critical safety, security, and operational procedures, ensuring that all crew members are prepared, informed, and aligned on their responsibilities. This helps the crew respond effectively to both routine and emergency situations during the flight. Pre-Flight Briefings ensure that each crew member understands their role and is mentally prepared to manage both routine and unexpected situations. It reinforces teamwork, coordination, and effective communication among crew members, making it a foundational aspect of aviation safety.",
    imgUrl:
      "https://i.ibb.co/589kLdg/toni-kroos-deutschland-2024-1711285973-132588.jpg",
    lessonId: slug
  };
  return (
    <section className="px-4">
      <ShowIntroduction
        data={chapterIntroduction}
      />
    </section>
  );
}

export default page;
