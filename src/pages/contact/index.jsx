import React from 'react';

import styles from './style.module.css';

import { yupResolver } from '@hookform/resolvers/yup';
import { enqueueSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Envelope, Facebook, Geo, Instagram, Linkedin, Phone } from 'src/assets/images/icons';
import { Input, SocialIcons, Textarea } from 'src/components';
import { CONTACT_SCHEMA } from 'src/contants/schema';
import { addForm } from 'src/redux/reducers/contactFormReducer';

export const Contact = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(CONTACT_SCHEMA) });

  const _onSubmit = values => {
    dispatch(addForm(values));
    reset();
    enqueueSnackbar('Your message was sent successfully', { variant: 'success' });
  };

  return (
    <main>
      <section className={styles.contact}>
        <div className="container">
          <div className={styles.content}>
            <div className={styles.left}>
              <div className={styles.title_box}>
                <h5 className={styles.text_header}>Send Message</h5>
              </div>
              <div>
                <form onSubmit={handleSubmit(_onSubmit)}>
                  <Input
                    register={register}
                    placeholder="Your Name"
                    name="name"
                    error={errors?.name?.message}
                  />
                  <Input
                    register={register}
                    placeholder="Your Email"
                    name="email"
                    type="email"
                    error={errors?.email?.message}
                  />
                  <Textarea
                    register={register}
                    placeholder="Message"
                    name="message"
                    error={errors?.message?.message}
                  />

                  <div className={styles.submit_button}>
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.title_box}>
                <h5 className={styles.text_header}>Get in Touch</h5>
              </div>
              <div className={styles.more_info}>
                <ul>
                  <li>
                    <span>
                      <img src={Geo} alt="geo" />
                    </span>
                    BAKU, AZERBAIJAN
                  </li>
                  <li>
                    <span>
                      <img src={Phone} alt="phone" />
                    </span>{' '}
                    +994 (50) 596-6225
                  </li>
                  <li>
                    <span>
                      <img src={Envelope} alt="envelope" />
                    </span>{' '}
                    rahil.eliyev@gmail.com
                  </li>
                </ul>
              </div>
              <div className="socials">
                <ul>
                  <li>
                    <SocialIcons link="https://www.facebook.com/rahilaliyev97/" icon={Facebook} />
                  </li>
                  <li>
                    <SocialIcons link="https://www.instagram.com/rhlali/" icon={Instagram} />
                  </li>
                  <li>
                    <SocialIcons link="https://www.linkedin.com/in/rahil-aliyev/" icon={Linkedin} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
