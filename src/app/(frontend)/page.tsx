import { getPayload } from "payload";
import config from "@/payload.config";
import Link from "next/link";
import Image from "next/image";
import VideoSlider from "@/components/VideoSlider";
import PartnersSlider from "@/components/PartnersSlider";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const payload = await getPayload({ config });

  const { docs: blogsRaw } = await payload.find({
    collection: "blogs",
    limit: 4,
    sort: "-date",
  });

  // Очищаємо дані від службових полів Payload для уникнення помилок серіалізації
  const blogs = blogsRaw.map((blog) => {
    const imgData =
      blog.img && typeof blog.img === "object" ? (blog.img as any) : null;

    // Ігноруємо blogImage.url і беремо тільки filename
    const filename = imgData?.filename;
    const imageUrl = filename
      ? `/media/${filename}`
      : "/webflow/images/hero_1.webp";

    return {
      id: blog.id,
      slug: blog.slug,
      name: blog.name,
      imageUrl: imageUrl, // ТУТ ТЕПЕР ТОЧНО /media/...
      imageAlt: imgData?.alt || blog.name,
    };
  });

  return (
    <>
      <div className="first-wrap">
        <div className="first">
          <div className="first-wideo">
            <div className="div-block-19 first-text-wrap main-page"></div>
            <div className="background-video w-background-video w-background-video-atom">
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                  backgroundImage:
                    'url("/webflow/videos/first_screen_background-poster-00001.jpg")',
                }}
                data-wf-ignore="true"
              >
                <source
                  src="/webflow/videos/first_screen_background-transcode.mp4"
                  data-wf-ignore="true"
                />
                <source
                  src="/webflow/videos/first_screen_background-transcode.webm"
                  data-wf-ignore="true"
                />
              </video>
            </div>
          </div>
          <h1 className="first-title">
            Державне агентство розвитку туризму України -
          </h1>
          <div className="first-text">
            центральний орган виконавчої влади, який реалізує державну політику
            у сфері туризму та курортів.&nbsp;
            <br />
            Ми команда, яка працює над підвищенням якості національного
            туристичного продукту, розвитком подорожей Україною та просуванням
            України як туристичної дестинації в світі.
            <br />
          </div>
        </div>
      </div>

      <div
        data-w-id="2be5c9c3-cacc-94c2-20d0-91565fb650ef"
        className="w-layout-blockcontainer o-container our-mission-wrap w-container"
      >
        <div className="w-layout-grid _3-col-grid mission-grid">
          <div
            data-w-id="2be5c9c3-cacc-94c2-20d0-91565fb650f1"
            className="gr-col-block"
          >
            <div className="second-screen-img">
              <Image
                src="/webflow/images/bg-img-1_1.webp"
                width={400}
                height={300}
                alt="our description image"
                className="image-description"
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
              />
            </div>
            <div className="gr-2nd-col-block">
              <h2 className="gr-col-h mission-item-heading">Місія</h2>
              <div className="gr-col-inf mission-item-text">
                Ми формуємо сучасну, сталу та діджиталізовану систему туризму в
                Україні, засновану на прозорості, достовірній статистиці,
                інноваційних сервісах і якісному туристичному продукті, який
                відповідає європейським стандартам. Ми працюємо над відновленням
                та стратегічною трансформацією галузі, аби підготувати її до
                відновлення іноземних туристичних потоків і повноцінного
                післявоєнного розвитку.
              </div>
            </div>
          </div>
          <div
            data-w-id="2be5c9c3-cacc-94c2-20d0-91565fb650fb"
            className="gr-col-block"
          >
            <div className="second-screen-img">
              <Image
                src="/webflow/images/bg-img-3_1.webp"
                width={400}
                height={300}
                alt="vision decorative"
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
              />
            </div>
            <div className="gr-2nd-col-block">
              <h2 className="gr-col-h mission-item-heading">Візія</h2>
              <div className="gr-col-inf mission-item-text">
                Ми бачимо Україну інноваційною, інтегрованою в європейський
                простір туристичною дестинацією, яка динамічно розвивається і в
                якій туризм є доступним, зручним, відкритим і цікавим для
                масштабних інвестицій, рівним у можливостях для кожного
                мандрівника та однією зі складових зростання економіки.
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoSlider />

      <div className="o-container alt-container w-container">
        <div className="alt-projects">
          <h2 className="alt-project-head">Проєкти ДАРТ</h2>
          <div
            data-w-id="2be5c9c3-cacc-94c2-20d0-91565fb6513c"
            className="alt-project-text"
          >
            Ми реалізовуємо проєкти, які популяризують Україну і для українців і
            світу. У цих проєктах, ми підтримуємо місцеві ініціативи, промотуємо
            нові маршрути, звертаємо увагу на туристичні дестинації.
          </div>
        </div>
        <div className="w-layout-grid _4-column-grid">
          <a
            href="https://www.facebook.com/MandruiUkrainoiu/"
            target="_blank"
            rel="noopener noreferrer"
            className="grid-item w-inline-block"
          >
            <div className="u-overflow">
              <Image
                src="/webflow/images/mandruy-pict_1.webp"
                width={400}
                height={250}
                alt="mandruy-project image"
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
              />
            </div>
            <div className="gr-2nd-col-block">
              <h3 className="grid-item-head">#МандруйУкраїною</h3>
              <div className="grid-item-text">
                Медіапроєкт, який знайомить українців з Україною: невідомою,
                красивою, розмаїтою і цікавою. Кожен зможе відкрити для себе
                нові локації, дізнатися неймовірні історії і точно запише
                запропоновані маршрути у список «must-visit».
              </div>
            </div>
          </a>
          <a
            href="/webflow/documents/marshrouts.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="grid-item w-inline-block"
          >
            <div className="u-overflow">
              <Image
                src="/webflow/images/marshruty-pict_1.webp"
                width={400}
                height={250}
                alt="marshruty image"
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
              />
            </div>
            <div className="gr-2nd-col-block">
              <h3 className="grid-item-head">Маршрути пам’яті</h3>
              <div className="grid-item-text">
                Мережа локацій, які вшановують пам’ять загиблих, події та місця,
                пов’язані із збройною агресією росії проти України та
                протистояння їй. У кожній області буде створено маршрут з
                декількома місцями пам’яті, які покажуть масштаби цієї війни.
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="news__section-wrap">
        <div className="o-container news-header-container">
          <h2
            data-w-id="2be5c9c3-cacc-94c2-20d0-91565fb651e9"
            className="main-all-news"
          >
            Новини
          </h2>
        </div>
        <section className="news-section">
          <div className="o-container news-main w-container">
            <div className="collection-list-wrapper alt-news-collection w-dyn-list">
              <div
                role="list"
                className="collection-list second-collection w-dyn-items"
              >
                {blogs.map((blog) => (
                  <div
                    key={blog.id}
                    role="listitem"
                    className="collection-item news-item w-dyn-item"
                  >
                    <Link
                      href={`/news/${blog.slug}`}
                      className="o-layout-nws u-anim news-item-wrap w-inline-block"
                    >
                      <div className="o-layout-nws-overflow news-img-wrap">
                        <Image
                          src={blog.imageUrl}
                          width={400}
                          height={250}
                          alt={blog.imageAlt}
                          className="o-layout-img"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <h3 className="news-heading">{blog.name}</h3>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="contact" className="h-section-5 alt-main-form">
        <div className="o-container u-size last-section w-container">
          <div className="_4column-flex">
            <div className="div-block-18">
              <h3 className="banner-heading">Наші інформаційні партнери</h3>
              <PartnersSlider />
            </div>
            <div className="_4col-last-block">
              <h3 className="form-main-header">Написати нам</h3>
              <div className="form-block-2 main-form w-form">
                <form id="email-form" name="email-form" className="form">
                  <div className="form-1st-block">
                    <input
                      className="txt-field form-main-input w-input"
                      maxLength={256}
                      name="name-2"
                      placeholder="Прізвище та ім'я"
                      type="text"
                      id="name-2"
                      required
                    />
                    <input
                      className="txt-field-2 form-main-input w-input"
                      maxLength={256}
                      name="email-2"
                      placeholder="Електронна адреса"
                      type="email"
                      id="email-2"
                      required
                    />
                  </div>
                  <textarea
                    className="txt-area form-main-area w-input"
                    maxLength={5000}
                    name="field-2"
                    placeholder="Повідомлення"
                    id="field-2"
                    required
                  ></textarea>
                  <div className="submit-checkbox">
                    <label className="w-checkbox checkbox-wrap">
                      <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox"></div>
                      <input
                        id="checkbox-2"
                        type="checkbox"
                        name="checkbox-2"
                        required
                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                      />
                      <label
                        className="checkbox-label w-form-label"
                        htmlFor="checkbox-2"
                      >
                        Я погоджуюсь з обробкою персональних даних
                      </label>
                    </label>
                    <div className="form-cta submit-button">
                      <input
                        type="submit"
                        className="form-main-submit w-button"
                        value="Надіслати"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
