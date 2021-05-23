import styled from 'styled-components';
import Head from 'next/head';
import BaseLayout from '../components/BaseLayout';
import SectionTitle from '../components/SectionTitle';

const Video = () => (
  <>
    <Head>
      <title>Robin | Portfolio</title>
    </Head>

    <BaseLayout>
      <div className="video section-container">
        <SectionTitle title="Video" />

        <div className="video-body">
          {/* Flutter zero to infinity */}
          <div className="card-container">
            <a
              href="https://www.youtube.com/playlist?list=PLAqczZ5-OdVKJOBskWc_zjsJFwcRlEkzO"
              target="_blank"
            >
              <img
                className="card-thumbnail"
                src="./images/v0_flutter_tutorial.jpg"
              />
            </a>
            <div className="p-10">
              <a
                className="pointer"
                href="https://www.youtube.com/playlist?list=PLAqczZ5-OdVKJOBskWc_zjsJFwcRlEkzO"
                target="_blank"
              >
                Flutter Tutorial - Zero to Infinity
              </a>
              <p className="description">
                From this tutorial series you will be able to build iOS and
                Android Apps with a Single Code base.
              </p>
            </div>
            <div className="footer">
              <p className="footer-content">63 Lectures</p>
              <p className="footer-content">13 Hours</p>
            </div>
          </div>

          {/* Dart Programming Language */}
          <div className="card-container">
            <a
              href="https://www.youtube.com/playlist?list=PLAqczZ5-OdVIMZYeryirjRzAizx9ik6TZ"
              target="_blank"
            >
              <img className="card-thumbnail" src="./images/v_dart.png" />
            </a>
            <div className="p-10">
              <a
                className="pointer"
                href="https://www.youtube.com/playlist?list=PLAqczZ5-OdVIMZYeryirjRzAizx9ik6TZ"
                target="_blank"
              >
                Dart Programming Language
              </a>
              <p className="description">
                This tutorial series is all about Google Dart Programming
                Language. You can find all the topics related to dart
                programming...
              </p>
            </div>
            <div className="footer">
              <p className="footer-content">35 Lectures</p>
              <p className="footer-content">7 Hours</p>
            </div>
          </div>

          {/* Avengers App */}
          <div className="card-container">
            <a
              href="https://www.youtube.com/playlist?list=PLAqczZ5-OdVK2HvZh0UAsIhxn23wRjcZF"
              target="_blank"
            >
              <img
                className="card-thumbnail"
                src="./images/v2_flutter_avengers.png"
              />
            </a>
            <div className="p-10">
              <a
                className="pointer"
                href="https://www.youtube.com/playlist?list=PLAqczZ5-OdVK2HvZh0UAsIhxn23wRjcZF"
                target="_blank"
              >
                Flutter Avengers App
              </a>
              <p className="description">
                From this flutter tutorial bangla series, you can learn how to
                develop a simple flutter app with the combination of some...
              </p>
            </div>
            <div className="footer">
              <p className="footer-content">7 Lectures</p>
              <p className="footer-content">2 Hours</p>
            </div>
          </div>

          {/* Color Guessing Game */}
          <div className="card-container">
            <a href="https://youtu.be/83g6rPtJtno" target="_blank">
              <img
                className="card-thumbnail"
                src="./images/v3_color_guessing_game.jpg"
              />
            </a>
            <div className="p-10">
              <a
                className="pointer"
                href="https://youtu.be/83g6rPtJtno"
                target="_blank"
              >
                Flutter Color Guessing Game
              </a>
              <p className="description">
                In this tutorial i build a simple color guessing app from
                scratch. Lots of concepts are discussed in this video like as...
              </p>
            </div>
            <div className="footer">
              <p className="footer-content">Single Lecture</p>
              <p className="footer-content">1:29 Hours</p>
            </div>
          </div>

          {/* Brain Treaser */}
          <div className="card-container">
            <a href="https://youtu.be/OMbhQKpxX5g" target="_blank">
              <img
                className="card-thumbnail"
                src="./images/v1_brain_teaser.png"
              />
            </a>
            <div className="p-10">
              <a
                className="pointer"
                href="https://youtu.be/OMbhQKpxX5g"
                target="_blank"
              >
                Flutter Brain-Teaser Game
              </a>
              <p className="description">
                Brain-Teaser or Sharp Your Brain is a simple math base game
                whcih can help you to think quickly.
              </p>
            </div>
            <div className="footer">
              <p className="footer-content">Single Lecture</p>
              <p className="footer-content">1:21 Hours</p>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  </>
);

export default Video;
