import SidewaysTitle from "./ui/SidewaysTitle"
import Typography from "./ui/Typography"

const skills = [
  {
    title: "DESIGN",
    content: "Design is the foundation of every project, shaping both the user experience and the overall success of a product. I use Figma to create visually appealing, functional, and user-centered designs that balance creativity with usability. My process focuses on clarity, consistency, and thoughtful interaction, ensuring that every element serves a clear purpose. From wireframing and prototyping to final UI design, I strive to create interfaces that are intuitive, accessible, and engaging. By combining design principles with attention to detail, I aim to deliver solutions that not only look great but also provide a seamless and meaningful experience for users."
  },
  {
    title: "DEVELOP",
    content: "Development is where design comes to life through clean, efficient, and scalable code. I use modern technologies such as React, Next.js, Tailwind CSS, and TypeScript to transform concepts and designs into fully functional, responsive applications. My focus is on writing maintainable code, optimizing performance, and ensuring a smooth user experience across different devices and platforms. I follow best practices and modern development standards to build reliable, high-quality solutions. By combining strong technical skills with an understanding of design principles, I aim to create products that are both visually polished and technically robust."
  },
  {
    title: "DELIVER",
    content: "Beyond the technical side, I place strong value on clear and consistent communication with clients throughout the delivery phase. I enjoy keeping clients involved, providing updates, explaining technical decisions in an easy-to-understand way, and making sure their expectations are fully met. I believe that strong communication builds trust and leads to better results, allowing me to deliver projects that not only function well but also align closely with the client’s goals and vision."
  },
]

const Skills = () => {
  return (
    <section id="skills" className="bg-background-dark min-h-[100dvh]">
      <div className="container py-16! md:py-24!">
        <div className="md:flex justify-between">
          <div className="w-full md:w-[52%] xl:w-[48%] flex gap-4">
            <SidewaysTitle>SKILLS</SidewaysTitle>
            <div className="-mt-2">
              <ul>
                {skills.map((s, i) => (
                  <li key={i}>
                    <p className={`${i != 0 ? "text-tx-light-subtle" : ""} text-tx-light font-bold text-4xl sm:text-4xl md:text-6xl lg:text-8xl mb-2 md:mb-4`}>{s.title}</p>
                  </li>
                )
                )}
              </ul>
            </div>
          </div>
          <div className=" mt-8 md:-mt-2 w-full md:w-[42%] xl:w-[48%]">
            <Typography variant="p">
              {skills[0].content}
            </Typography>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills