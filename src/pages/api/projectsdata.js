export default function handler(req, res) {
  res.status(200).json([
    {
      id: "01",
      name: "Studioblank",
      short: "E-commerce Website",
      description:
        "An ecommerce website platform with simple shopping cart features. The website was created using React.js, Stripe API payment and Strapi CMS management as a back-end.",
      image: "/images/projects/studioblank.png",
      link: "https://studioblank.netlify.app/",
      colors: ["#524D4B", "#EEE9E3", "#E2E2E2"],
      tools: ["React.js", "CSS Module", "Redux Toolkit"],
    },
    {
      id: "02",
      name: "CareerCo",
      short: "Job Searching Website",
      description:
        "A job searching website is an online platform where job seekers can search and apply for job opportunities posted by employers. The website was created using React.js and Redux Toolkit as a state manager.",
      link: "https://careerco.netlify.app/",
      image: "/images/projects/careerco.png",
      colors: ["#3F60A0", "#F5F5F5", "#3B3B3B"],
      tools: ["React.js", "CSS Module", "Redux Toolkit"],
    },
    {
      id: "03",
      name: "Website",
      short: "Some Random website",
      description:
        "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
      image: "/images/projects/profile-blog.png",
      colors: ["#524D4B", "#EEE9E3", "#E2E2E2"],
      tools: ["React.js", "CSS Module", "Redux Toolkit"],
    },
  ]);
}
