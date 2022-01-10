import {
  Column,
  CounterInput,
  Layout,
  Row,
  Section,
  TextInput,
} from "components";
import { Form } from "components/forms/Form";
import { useState } from "react";

const Home = () => {
  const loading = false;
  const [reset, setReset] = useState(false);

  const submit = (body: any) => {
    fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(body),
    });
    // setReset(!reset);
  };

  return (
    <Layout
      headTitle="Bartosz Home"
      seoTitle="Front-end Développeur Bartosz"
      seoDescription="" // todo:
      title="Contact"
      description="You want to trust me with a mission or recruit me, everything happens here!"
    >
      <Section>
        <Form
          form="contact"
          id="contact"
          name="contact"
          initialBody={{
            name: "",
            email: "",
            description: "",
          }}
          submit={submit}
          reset={reset}
          className={"w-full"}
          children={({ inputProps }) => {
            return (
              <>
                {/* INPUTS */}

                <Column className="w-full gap-5">
                  <Row positionY="center" className="w-full gap-5">
                    <TextInput
                      {...inputProps("email")}
                      placeholder="jhon-doe@gmail.com"
                      label="Email"
                      required={true}
                      type="email"
                    />
                    <TextInput
                      placeholder="John Doe"
                      label="Name"
                      maxLength={30}
                      required
                      {...inputProps("name")}
                    />
                  </Row>

                  <CounterInput
                    placeholder="Description"
                    label="Description"
                    required
                    maxLength={300}
                    {...inputProps("description")}
                  />
                  <input
                    type="submit"
                    value="Register"
                    accessKey="Enter"
                    className="self-end px-6 py-2 mt-5 text-white transition-colors duration-300 ease-in-out bg-gray-900 border border-gray-200 appearance-none cursor-pointer hover:bg-gray-800 text-uppercase dark:text-white dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-min whitespace-nowrap rounded-xl max-md:py-2 max-md:px-3 "
                    form="contact"
                  />
                </Column>
              </>
            );
          }}
        />
      </Section>
    </Layout>
  );
};

export default Home;
