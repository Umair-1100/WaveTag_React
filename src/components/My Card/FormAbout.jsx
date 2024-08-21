import { ChildOneInside } from "./ChildOneInside";
import { CardTitleCom } from "./CardTitleCom";
import styles from "./mycard.module.scss";
import { FormInputs } from "./FormInputs";

const FormAbout = () => {
  return (
    <div className={styles.about_inner_main}>
            <div className={styles.drag_and_drop}>
              <div className={styles.drag_and_drop_child_1}>
                <ChildOneInside heading="Profile Photo" />
                <ChildOneInside
                  className={styles.shape_different}
                  heading="Cover Photo"
                />
                <ChildOneInside heading="Company Logo" />
              </div>
            </div>

            <div className={styles.form_of_about_inner}>
              <div className={styles.main_of_card_title}>
                <CardTitleCom />
              </div>

              <div className={styles.form_of_about_page}>
                <FormInputs
                  title="Name"
                  placeholder="Charlene Reed"
                  InputId="Name"
                  type="text"
                  name="name"
                />
                <FormInputs
                  title="User Name"
                  placeholder="@Charlene Reed"
                  InputId="UserName"
                  type="text"
                  name="usernname"
                />
                <FormInputs
                  title="Email"
                  placeholder="charlenereed@gmail.com"
                  InputId="Email"
                  type="email"
                  name="email"
                />
                <FormInputs
                  title="Mobile"
                  placeholder="***********"
                  InputId="Number"
                  type="number"
                  name="mobile"
                />
                <FormInputs
                  title="Job Title"
                  placeholder="UI UX"
                  InputId="Title"
                  type="text"
                  name="title"
                />
                <FormInputs
                  title="Company"
                  placeholder="EH"
                  InputId="Company"
                  type="text"
                  name="company"
                />
              </div>

              <div className="flex flex-col items-end gap-2 justify-center">
                <label htmlFor="bio" className="text-left w-full  text-xl">
                  Bio
                </label>
                <textarea
                  className="placeholder:text-[#718ebf] outline-none border-2 border-[#dfeaf2] w-full rounded-3xl overflow-hidden resize-none p-4 text-black"
                  name="bio"
                  placeholder="San Jose, USA"
                  id="bio"
                  cols="30"
                  rows="7"
                ></textarea>
                <button
                  type="submit"
                  className="py-3 px-12 text-white mr-2 rounded-md hover:bg-white border-2 hover:font-bold font-bold transition-all border-[#1814f3] hover:text-[#1814f3]  bg-[#1814f3]"
                >
                  Save
                </button>
              </div>
            </div>

          </div>
  )
}

export default FormAbout