import { ActivityCard } from "./ActivityCard";

const activities = [
  {
    number: "01",
    title: "収益の配当をどのように使うかをDAOのメンバーみんなで決定します。",
    description:
      "",
    image: "/images/publications/photo/6.role/img_role_01@2x.jpg",
  },
  {
    number: "02",
    title: "出店テナントのオーディションや投票を行います。",
    description:
      "",
    note: "",
    image: "/images/publications/photo/6.role/img_role_02@2x.jpg",
  },
  {
    number: "03",
    title: "出店テナントの試食会へ参加して、よりよいサービスづくりをします。",
    description:
      "",
    note: "",
    image: "/images/publications/photo/6.role/img_role_03@2x.jpg",
  },
];

export const Activity = () => {
  return (
    <section id="roles">
      <div className="flex flex-col gap-[120px] max-w-[920px] mx-auto">
        {activities.map((activity, index) => (
          <ActivityCard key={index} {...activity} />
        ))}
      </div>
    </section>
  );
};
