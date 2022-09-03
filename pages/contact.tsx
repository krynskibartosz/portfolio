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
import { useState } from 'react';

const Contact = () => {
  const loading = false;
  const [reset, setReset] = useState(false);

  const { t } = useTranslation('');

  const submit = (body: any) => {
    fetch('/api/mail', {
      method: 'post',
      body: JSON.stringify(body),
    });
    // setReset(!reset);
  };

  return (
    <Layout
      headTitle="Bartek Contact"
      seoTitle="Frontend Développeur Bartek"
      seoDescription="" // todo:
      title={t('Contact')}
      description={`${t(
        'YouWantToTrustMeWithAMissionOrRecruitMeEverythingHappensHere'
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
          reset={reset}
          className={'w-full'}
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
                      label={t('Email')}
                      required={true}
                      type="email"
                    />
                    <TextInput
                      placeholder="John Doe"
                      label={t('Name')}
                      maxLength={30}
                      required
                      {...inputProps('name')}
                    />
                  </Row>

                  <CounterInput
                    placeholder={t('Description')}
                    label={t('Description')}
                    required
                    maxLength={300}
                    {...inputProps('description')}
                  />
                </Column>
                <Row className="w-full h-full" positionX="right">
                  {/* todo: set and bg on onactive */}
                  <button
                    type="submit"
                    value={t('Send')}
                    accessKey="Enter"
                    className="px-6 py-2 mt-5 text-white transition-colors duration-300 ease-in-out bg-gray-900 border border-gray-200 appearance-none cursor-pointer active:bg-gray-700 focus:active:bg-gray-700 hover:bg-gray-800 text-uppercase dark:text-white dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:active:bg-gray-600 w-min whitespace-nowrap rounded-xl max-md:px-4"
                    form="contact"
                  >
                    {t('Send')}
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
