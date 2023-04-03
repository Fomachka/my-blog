const PROJECTS_DATA = [
  {
    id: "01",
    name: "STUDIOBLANK E-Commerce",
    description:
      "An ecommerce website is an online store where businesses can sell products or services to customers through a digital platform.",
    image: "images/coding-event.jpg",
    isFeatured: false,
  },
  {
    id: "02",
    title: "CAREER/CO Job Search",
    description:
      "A job searching website is an online platform where job seekers can search and apply for job opportunities posted by employers.",

    image: "images/introvert-event.jpg",
  },
  {
    id: "03",
    title: "Networking for extroverts",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    image: "images/extrovert-event.jpg",
  },
];
export function getAllProjects() {
  return PROJECTS_DATA;
}
