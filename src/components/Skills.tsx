import SidewaysTitle from "./ui/SidewaysTitle"
import Typography from "./ui/Typography"

const skills = [
  {
    title: "BRANDING",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, metus nec posuere efficitur, nisl enim euismod urna, sed pretium eros ipsum sed sem. Sed lectus ipsum, placerat ac odio nec, pretium placerat nulla. Curabitur ut volutpat mi, sed fringilla dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam lobortis scelerisque leo ut consectetur. Fusce commodo, eros at pulvinar condimentum, ex ipsum maximus enim, vitae egestas nunc nibh sit amet orci. Proin augue diam."
  },
  {
    title: "DESIGN",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, metus nec posuere efficitur, nisl enim euismod urna, sed pretium eros ipsum sed sem. Sed lectus ipsum, placerat ac odio nec, pretium placerat nulla. Curabitur ut volutpat mi, sed fringilla dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam lobortis scelerisque leo ut consectetur. Fusce commodo, eros at pulvinar condimentum, ex ipsum maximus enim, vitae egestas nunc nibh sit amet orci. Proin augue diam."
  },
  {
    title: "SOFTWARE",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, metus nec posuere efficitur, nisl enim euismod urna, sed pretium eros ipsum sed sem. Sed lectus ipsum, placerat ac odio nec, pretium placerat nulla. Curabitur ut volutpat mi, sed fringilla dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam lobortis scelerisque leo ut consectetur. Fusce commodo, eros at pulvinar condimentum, ex ipsum maximus enim, vitae egestas nunc nibh sit amet orci. Proin augue diam."
  },
]

const Skills = () => {
  return (
    <section className="bg-background-dark min-h-screen">
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