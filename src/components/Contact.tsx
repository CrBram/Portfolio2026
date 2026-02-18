import { useRef, useState } from "react"
import { useForm } from "react-hook-form"
import Marquee from "react-fast-marquee"
import Draggable from "react-draggable"
import Field from "./ui/Field"
import Button from "./ui/Button"

const FORMSPARK_URL = "https://submit-form.com/kmbymzSUe"

type ContactForm = {
  name: string
  function: string
  email: string
  message: string
}

const Contact = () => {
  const nodeRef = useRef<HTMLDivElement>(null)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>()
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const onSubmit = async (data: ContactForm) => {
    setStatus("sending")
    try {
      const res = await fetch(FORMSPARK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error("Submit failed")
      setStatus("success")
      reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="min-h-[100dvh] bg-background relative overflow-hidden">
      <div className="flex pt-15 md:pt-0 md:items-center justify-center h-full">
        <div className="container py-16! md:py-24! relative">
          <div className="md:flex justify-between">
            <Marquee
              className="overflow-hidden z-0"
              speed={150}
              autoFill={true}
              pauseOnHover={false}
              gradient={false}
            >
              <span className="select-none font-tronica text-6xl md:text-9xl text-tx-dark flex items-center gap-4 whitespace-nowrap">
                LET'S CONNECT
              </span>
              <img
                src={"/images/red_dot.png"}
                alt={"dot"}
                className="md:w-8 md:h-8 w-4 h-4 mx-16 md:mx-32"
              />
            </Marquee>
          </div>
        </div>
      </div>
      <div
        className="absolute pt-20 md:pt-0 inset-0 flex items-center justify-center z-10 pointer-events-none"
        aria-hidden
      >
        <div className="pointer-events-auto">
          <Draggable nodeRef={nodeRef} handle=".contact-drag-handle" defaultPosition={{ x: 0, y: 0 }}>
            <div
              ref={nodeRef}
              className="md:min-w-[27rem] md:min-h-[40rem] min-w-[80vw] min-h-[60vh] px-3 pb-3 flex flex-col"
              style={{ backgroundColor: "#C0C7D1" }}
            >
              <div className="contact-drag-handle flex justify-between items-center cursor-grab active:cursor-grabbing">
                <p className="text-tx-dark font-micro5 text-4xl">CONTACT</p>
                <button className="hover:bg-background-dark-subtle rounded-sm p-1 cursor-pointer">
                  <img src="/images/icons/x_icon.svg" alt="close" className="w-4 h-4" />
                </button>
              </div>
              <div className="bg-background-dark rounded-sm p-4 flex-1 flex flex-col min-h-0">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-between flex-1 min-h-0">
                  <div className="flex flex-col gap-4">
                    <Field label="NAME" error={errors.name?.message} required>
                      <input {...register("name", { required: "Required" })} />
                    </Field>
                    <Field label="FUNCTION">
                      <input {...register("function")} />
                    </Field>
                    <Field label="EMAIL">
                      <input {...register("email")} />
                    </Field>
                    <div className="mt-4">
                      <Field label="MESSAGE" error={errors.message?.message} required>
                        <textarea {...register("message", { required: "Required" })} rows={4} className="resize-none" />
                      </Field>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button
                      className="w-full flex justify-center text-xl md:text-2xl disabled:opacity-70 disabled:cursor-not-allowed"
                      text={status === "sending" ? "SENDING…" : "SEND MESSAGE"}
                      onClick={handleSubmit(onSubmit)}
                      disabled={status === "sending"}
                    />
                  </div>
                </form>
              </div>
            </div>
          </Draggable>
        </div>
      </div>
    </section>
  )
}

export default Contact