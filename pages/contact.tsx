import {
  Column,
  CounterInput,
  Layout,
  Row,
  Section,
  TextInput,
} from 'components';
import { Form } from 'components/forms/Form';
import { useTranslation } from 'next-i18next';

import nextI18NextConfig from 'next-i18next.config';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import emailjs from '@emailjs/browser';

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
    },
  };
};

const Contact = () => {
  // const [reset, setReset] = useState(false);

  const { t } = useTranslation('');

  const submit = (body: any) => {
    emailjs
      .sendForm(
        `${process.env.SERVICE_EMAIL_ID}`,
        `${process.env.TEMPLATE_EMAIL_ID}`,
        body,
        `${process.env.PUBLIC_KEY_EMAIL_ID}`
      )
      .then(
        (result) => {
          console.log(
            '🚀 ~ file: contact.tsx ~ line 40 ~ submit ~ result',
            result.text
          );
        },
        (error) => {
          console.log(
            '🚀 ~ file: contact.tsx ~ line 43 ~ submit ~ error',
            error.text
          );
        }
      );
    // setReset(!reset);
  };

  return (
    <Layout
      headTitle="Bartek Contact"
      seoTitle="Frontend Développeur Bartek"
      seoDescription="" // todo:
      title={t('contact.Contact')}
      description={`${t(
        'contact.YouWantToTrustMeWithAMissionOrRecruitMeEverythingHappensHere'
      )} !`}
    >
      <Section className="z-10 max-md:px-5">
        <Form
          form="contact"
          id="contact"
          name="contact"
          initialBody={{
            name: '',
            email: '',
            description: '',
          }}
          submit={submit}
          // reset={reset}
          className={'w-full'}
          // eslint-disable-next-line react/no-children-prop
          children={({ inputProps }) => {
            return (
              <>
                {/* INPUTS */}

                <Column className="w-full gap-5">
                  <Row
                    positionY="center"
                    className="w-full gap-5 max-md:flex-col"
                  >
                    <TextInput
                      {...inputProps('email')}
                      placeholder="jhon-doe@gmail.com"
                      label={t('contact.Email')}
                      required={true}
                      type="email"
                    />
                    <TextInput
                      placeholder="John Doe"
                      label={t('contact.Name')}
                      maxLength={30}
                      required
                      {...inputProps('name')}
                    />
                  </Row>

                  <CounterInput
                    placeholder={t('contact.Description')}
                    label={t('contact.Description')}
                    required
                    maxLength={300}
                    {...inputProps('description')}
                  />
                </Column>
                <Row className="w-full h-full" positionX="right">
                  {/* todo: set and bg on onactive */}
                  <button
                    type="submit"
                    value={t('contact.Send')}
                    accessKey="Enter"
                    className="px-6 py-2 mt-5 text-white transition-colors duration-300 ease-in-out bg-gray-900 border border-gray-200 appearance-none cursor-pointer active:bg-gray-700 focus:active:bg-gray-700 hover:bg-gray-800 text-uppercase dark:text-white dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:active:bg-gray-600 w-min whitespace-nowrap rounded-xl max-md:px-4"
                    form="contact"
                  >
                    {t('contact.Send')}
                  </button>
                </Row>
              </>
            );
          }}
        />
      </Section>
    </Layout>
  );
};

export default Contact;
