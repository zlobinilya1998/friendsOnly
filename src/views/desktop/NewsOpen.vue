<template>
    <div>
        <Header />
        <div class="containerOuter">
            <router-link custom v-slot="{ navigate }" to="/desktop/news">
                <div class="btn" @click="navigate">
                    <svg
                        width="7"
                        height="11"
                        viewBox="0 0 7 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.42225 10.7334L0.238574 6.02334C-0.0795226 5.73431 -0.0795226 5.26569 0.238574 4.97666L5.42225 0.26658C5.74034 -0.0224534 6.25608 -0.0224534 6.57417 0.266581C6.89227 0.555614 6.89227 1.02423 6.57417 1.31326L1.96646 5.5L6.57417 9.68674C6.89227 9.97577 6.89227 10.4444 6.57417 10.7334C6.25608 11.0225 5.74034 11.0225 5.42225 10.7334Z"
                            fill="white"
                            fill-opacity="0.9"
                        />
                    </svg>

                    <p>
                        Назад
                    </p>
                </div>
            </router-link>
            <div class="container">
                <div v-for="item of news" :key="item.id" class="item">
                    <div class="item-shadow"></div>
                    <div class="item-background">
                        <img src="@/../public/img/img1.png" />
                    </div>
                    <div class="text-content">
                        <p class="date">{{ item.date }}</p>
                        <h5 class="description">{{ item.description }}</h5>
                        <div class="rating">
                            <p class="views">
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clip-path="url(#clip0)">
                                        <path
                                            d="M6.99991 5.09033C5.94672 5.09033 5.09082 5.94623 5.09082 6.99942C5.09082 8.05261 5.94672 8.9085 6.99991 8.9085C8.0531 8.9085 8.909 8.05261 8.909 6.99942C8.909 5.94623 8.05307 5.09033 6.99991 5.09033Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M7.00002 2.22632C3.81818 2.22632 1.10092 4.20539 0 6.99905C1.10092 9.79268 3.81818 11.7718 7.00002 11.7718C10.185 11.7718 12.8991 9.79268 14 6.99905C12.8991 4.20539 10.185 2.22632 7.00002 2.22632ZM7.00002 10.1809C5.24365 10.1809 3.81818 8.75538 3.81818 6.99902C3.81818 5.24265 5.24365 3.81722 7.00002 3.81722C8.75638 3.81722 10.1818 5.24268 10.1818 6.99905C10.1818 8.75541 8.75638 10.1809 7.00002 10.1809Z"
                                            fill="white"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="14" height="14" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                {{ item.views }}K
                            </p>
                            <div class="like-blog">
                                <p class="like">
                                    <svg
                                        width="13"
                                        height="13"
                                        viewBox="0 0 13 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0)">
                                            <path
                                                d="M0.947917 12.4578H2.30208C2.82479 12.4578 3.25 12.0326 3.25 11.5098V5.28068C3.25 4.75797 2.82479 4.33276 2.30208 4.33276H0.947917C0.425208 4.33276 0 4.75797 0 5.28068V11.5098C0 12.0326 0.425208 12.4578 0.947917 12.4578Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M6.92304 0.40625C6.38138 0.40625 6.11054 0.677083 6.11054 2.03125C6.11054 3.31825 4.86417 4.35392 4.0625 4.88746V11.5976C4.92971 11.999 6.66575 12.5938 9.36054 12.5938H10.2272C11.2835 12.5938 12.1826 11.8354 12.3614 10.7954L12.968 7.27458C13.1955 5.9475 12.1772 4.73958 10.8339 4.73958H8.27721C8.27721 4.73958 8.68346 3.92708 8.68346 2.57292C8.68346 0.947917 7.46471 0.40625 6.92304 0.40625Z"
                                                fill="white"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect width="13" height="13" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    {{ item.like }}
                                </p>
                                <p class="dislike">
                                    <svg
                                        width="13"
                                        height="13"
                                        viewBox="0 0 13 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0)">
                                            <path
                                                d="M0.947917 0.542236H2.30208C2.82479 0.542236 3.25 0.967444 3.25 1.49015V7.71932C3.25 8.24203 2.82479 8.66724 2.30208 8.66724H0.947917C0.425208 8.66724 0 8.24203 0 7.71932V1.49015C0 0.967444 0.425208 0.542236 0.947917 0.542236Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M6.92304 12.5938C6.38138 12.5938 6.11054 12.3229 6.11054 10.9688C6.11054 9.68175 4.86417 8.64608 4.0625 8.11254V1.40238C4.92971 1.001 6.66575 0.40625 9.36054 0.40625H10.2272C11.2835 0.40625 12.1826 1.16458 12.3614 2.20458L12.968 5.72542C13.1955 7.0525 12.1772 8.26042 10.8339 8.26042H8.27721C8.27721 8.26042 8.68346 9.07292 8.68346 10.4271C8.68346 12.0521 7.46471 12.5938 6.92304 12.5938Z"
                                                fill="white"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect
                                                    width="13"
                                                    height="13"
                                                    fill="white"
                                                    transform="matrix(1 0 0 -1 0 13)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    {{ item.dislike }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="news-blog">
                    <div class="text-wrapper">
                        <p>
                            Одно из самых тяжелых испытаний для человека — смерть близкого. Однако
                            родственники героев нашего сегодняшнего материала столкнулись с гораздо
                            более страшной трагедией — их родные пропали без вести, оставив близких
                            в полнейшем неведении относительно их судьбы. Ушла гулять с подругой и
                            не вернулась, пропала из гостиничного номера, исчез по дороге в
                            художественную школу — эти жуткие формулировки стали последними
                            воспоминаниями для тех, чьи родные бесследно исчезли, не оставив никаких
                            следов, улик и тени надежды на то, что они когда-нибудь вернутся домой.
                            Долгие месяцы и даже годы поисков, привлечение сил полиции и волонтеров,
                            отчаянное желание узнать хоть что-то о судьбе своих родных — эти дела о
                            пропавших не сдвинулись с мертвой точки, несмотря на колоссальные усилия
                            всех участников расследования. Однако в сердцах тех, кто ждет их дома,
                            все еще жива надежда на встречу.
                        </p>
                    </div>
                    <div class="img-wrapper">
                        <img class="blog-img" src="@/../public/img/NewsOpen1.png" />
                    </div>
                    <div class="text-wrapper">
                        <h4 class="blog-title">Николь Морен</h4>
                        <p class="blog-text">
                            8-летняя Николь Луиза Морен 30 июля 1985 года находилась в своем доме в
                            Торонто вместе с матерью. Семья жила в престижном районе города Этобико,
                            а их многоквартирный жилой комплекс с бассейном, тренажерным залом,
                            игровыми комнатами и охраняемой территорией считался абсолютно
                            безопасным.
                        </p>
                    </div>
                    <div class="img-wrapper">
                        <img class="blog-img" src="@/../public/img/NewsOpen2.png" />
                    </div>
                    <div class="text-wrapper">
                        <p class="blog-text">
                            Утром Николь сообщила маме, что хочет пойти к бассейну вместе со своей
                            приятельницей, также проживающей в этом доме, и женщина согласилась —
                            родители девочки часто отпускали ее гулять на территории здания, будучи
                            уверенными в том, что там не случится ничего плохого. Перед выходом
                            Николь из квартиры в домофон позвонила ее подруга Морен и сообщила, что
                            ждет в холле дома — путь до вестибюля составлял около трех минут,
                            включая дорогу до лифта и спуск вниз. Примерно в 11 часов утра девочка
                            вышла из квартиры и больше никогда не вернулась.
                        </p>
                    </div>
                </div>
            </div>
            <div class="like-bar-wrapper">
                <div class="like-bar">
                    <div class="like-item">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clip-path="url(#clip10)">
                                <path
                                    d="M1.45833 19.1655H3.54167C4.34583 19.1655 5 18.5114 5 17.7072V8.12386C5 7.31969 4.34583 6.66553 3.54167 6.66553H1.45833C0.654167 6.66553 0 7.31969 0 8.12386V17.7072C0 18.5114 0.654167 19.1655 1.45833 19.1655Z"
                                    fill="#292941"
                                    fill-opacity="0.6"
                                />
                                <path
                                    d="M10.6508 0.625C9.8175 0.625 9.40083 1.04167 9.40083 3.125C9.40083 5.105 7.48333 6.69833 6.25 7.51917V17.8425C7.58417 18.46 10.255 19.375 14.4008 19.375H15.7342C17.3592 19.375 18.7425 18.2083 19.0175 16.6083L19.9508 11.1917C20.3008 9.15 18.7342 7.29167 16.6675 7.29167H12.7342C12.7342 7.29167 13.3592 6.04167 13.3592 3.95833C13.3592 1.45833 11.4842 0.625 10.6508 0.625Z"
                                    fill="#292941"
                                    fill-opacity="0.6"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip10">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div class="like-item">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clip-path="url(#clip10)">
                                <path
                                    d="M1.45833 0.834718H3.54167C4.34583 0.834718 5 1.48888 5 2.29305V11.8764C5 12.6806 4.34583 13.3347 3.54167 13.3347H1.45833C0.654167 13.3347 0 12.6806 0 11.8764V2.29305C0 1.48888 0.654167 0.834718 1.45833 0.834718Z"
                                    fill="#292941"
                                    fill-opacity="0.6"
                                />
                                <path
                                    d="M10.6508 19.375C9.8175 19.375 9.40083 18.9583 9.40083 16.875C9.40083 14.895 7.48333 13.3017 6.25 12.4808V2.1575C7.58417 1.54 10.255 0.625 14.4008 0.625H15.7342C17.3592 0.625 18.7425 1.79167 19.0175 3.39167L19.9508 8.80833C20.3008 10.85 18.7342 12.7083 16.6675 12.7083H12.7342C12.7342 12.7083 13.3592 13.9583 13.3592 16.0417C13.3592 18.5417 11.4842 19.375 10.6508 19.375Z"
                                    fill="#292941"
                                    fill-opacity=".6"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip10">
                                    <rect
                                        width="20"
                                        height="20"
                                        fill="white"
                                        transform="matrix(1 0 0 -1 0 20)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div class="like-item">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M13.9983 0H6.00047C2.69302 0 0.0020752 2.69095 0.0020752 5.9984V10.6638C0.0020752 13.8596 2.51407 16.4796 5.66723 16.6532V19.4338C5.66723 19.7461 5.92183 20 6.23474 20C6.38437 20 6.526 19.9407 6.63297 19.8337L7.25814 19.2085C8.8997 17.5666 11.0828 16.6622 13.4048 16.6622H13.9983C17.3058 16.6622 19.9967 13.9713 19.9967 10.6638V5.9984C19.9967 2.69095 17.3058 0 13.9983 0ZM5.66723 9.66409C4.93209 9.66409 4.33425 9.06625 4.33425 8.33111C4.33425 7.59597 4.93209 6.99813 5.66723 6.99813C6.40237 6.99813 7.00021 7.59597 7.00021 8.33111C7.00021 9.06625 6.40203 9.66409 5.66723 9.66409ZM9.99941 9.66409C9.26427 9.66409 8.66643 9.06625 8.66643 8.33111C8.66643 7.59597 9.26427 6.99813 9.99941 6.99813C10.7345 6.99813 11.3324 7.59597 11.3324 8.33111C11.3324 9.06625 10.7342 9.66409 9.99941 9.66409ZM14.3316 9.66409C13.5964 9.66409 12.9986 9.06625 12.9986 8.33111C12.9986 7.59597 13.5964 6.99813 14.3316 6.99813C15.0667 6.99813 15.6646 7.59597 15.6646 8.33111C15.6646 9.06625 15.0664 9.66409 14.3316 9.66409Z"
                                fill="#292941"
                                fill-opacity="0.6"
                            />
                        </svg>
                    </div>
                    <div class="like-item">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M19.7667 8.73098L12.5444 0.286779C12.3088 0.0116735 11.9477 -0.0746835 11.6333 0.0677941C11.3178 0.211646 11.1111 0.5557 11.1111 0.938465V5.00434H10.8334C4.86004 5.00434 0 10.4762 0 17.2015V19.078C0 19.5132 0.272217 19.8761 0.648805 19.975C0.710044 19.9924 0.771079 20 0.832115 20C1.14665 20 1.44776 19.7922 1.59322 19.4658C3.15553 15.9467 6.29661 13.7612 9.79108 13.7612H11.1111V17.8269C11.1111 18.2099 11.3178 18.5539 11.6333 18.6964C11.9456 18.8403 12.3088 18.7527 12.5444 18.4774L19.7667 10.0332C20.0778 9.66923 20.0778 9.09634 19.7667 8.73098Z"
                                fill="#292941"
                                fill-opacity="0.6"
                            />
                        </svg>
                    </div>
                    <div class="like-item">
                        <svg
                            width="26"
                            height="21"
                            viewBox="0 0 26 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0.780029 10.2756C9.64603 -0.42237 18.109 1.16144 24.96 10.6719C21.1987 16.6154 11.0968 24.8571 0.780029 10.2756Z"
                                fill="#292941"
                                fill-opacity="0.6"
                            />
                            <path
                                d="M25.5764 10.1335C25.3465 9.80539 19.8675 2.1001 12.8699 2.1001C5.87226 2.1001 0.393039 9.80539 0.163339 10.1332C-0.0544463 10.4444 -0.0544463 10.8666 0.163339 11.1778C0.393039 11.5059 5.87226 19.2112 12.8699 19.2112C19.8675 19.2112 25.3465 11.5059 25.5764 11.1781C25.7945 10.8669 25.7945 10.4444 25.5764 10.1335ZM12.8699 17.4411C7.71539 17.4411 3.25104 12.3269 1.9295 10.6551C3.24933 8.98169 7.70433 3.8702 12.8699 3.8702C18.0241 3.8702 22.4882 8.98347 23.8103 10.6563C22.4904 12.3296 18.0354 17.4411 12.8699 17.4411Z"
                                fill="#292941"
                                fill-opacity="0.6"
                            />
                            <g clip-path="url(#clip3)">
                                <path
                                    d="M15.1852 10.0587H15.0484V9.49125C15.0484 8.44172 14.1088 7.565 12.9343 7.54628C12.9022 7.54577 12.8381 7.54577 12.806 7.54628C11.6316 7.565 10.6919 8.44172 10.6919 9.49125V10.0587H10.5551C10.3443 10.0587 10.1724 10.2515 10.1724 10.4896V13.3357C10.1724 13.5735 10.3443 13.7681 10.5551 13.7681H15.1852C15.396 13.7681 15.568 13.5735 15.568 13.3357V10.4896C15.568 10.2515 15.396 10.0587 15.1852 10.0587ZM13.3039 11.9097V12.7697C13.3039 12.8682 13.2109 12.9515 13.0998 12.9515H12.6406C12.5294 12.9515 12.4364 12.8682 12.4364 12.7697V11.9097C12.3286 11.8157 12.2658 11.6856 12.2658 11.5416C12.2658 11.2689 12.5036 11.0346 12.806 11.0237C12.8381 11.0226 12.9023 11.0226 12.9343 11.0237C13.2368 11.0346 13.4746 11.2689 13.4746 11.5416C13.4746 11.6856 13.4118 11.8157 13.3039 11.9097ZM14.1469 10.0587H12.9343H12.806H11.5935V9.49125C11.5935 8.86606 12.1667 8.34913 12.8702 8.34913C13.5736 8.34913 14.1469 8.86606 14.1469 9.49125V10.0587H14.1469Z"
                                    fill="white"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip3">
                                    <rect
                                        width="7.02"
                                        height="6.22222"
                                        fill="white"
                                        transform="translate(9.36035 7.5459)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <svg
                    @click="scrollTop"
                    class="arrow-up"
                    id="arrow-up"
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g filter="url(#filter0_b)">
                        <circle
                            r="27"
                            transform="matrix(1 0 0 -1 27 27)"
                            fill="white"
                            fill-opacity="0.9"
                        />
                    </g>
                    <path
                        opacity="0.8"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M37.5625 30.3467L28.0562 20.4552C27.4729 19.8483 26.5271 19.8483 25.9438 20.4552L16.4375 30.3467C15.8542 30.9537 15.8542 31.9378 16.4375 32.5448C17.0209 33.1517 17.9667 33.1517 18.55 32.5448L27 23.7524L35.45 32.5448C36.0333 33.1517 36.9791 33.1517 37.5625 32.5448C38.1458 31.9378 38.1458 30.9537 37.5625 30.3467Z"
                        fill="#292941"
                    />
                    <defs>
                        <filter
                            id="filter0_b"
                            x="-5"
                            y="-5"
                            width="64"
                            height="64"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                        >
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feGaussianBlur in="BackgroundImage" stdDeviation="2.5" />
                            <feComposite
                                in2="SourceAlpha"
                                operator="in"
                                result="effect1_backgroundBlur"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_backgroundBlur"
                                result="shape"
                            />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div class="container">
                <div class="comments-wrapper">
                    <p class="comments-count">{{ commentsCount }} комментариев</p>
                    <div class="input-wrapper">
                        <input class="input" v-model="input" placeholder="Написать комментарий" />
                        <svg
                            opacity=".5"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g>
                                <path
                                    d="M22.5707 9.33375L3.20688 0.20324C2.39112 -0.181455 1.46951 -0.0122255 0.801771 0.644664C0.134036 1.30166 -0.145246 2.31395 0.0730043 3.28645L1.79655 10.9671H10.2353C10.6236 10.9671 10.9385 11.3249 10.9385 11.7662C10.9385 12.2075 10.6236 12.5653 10.2353 12.5653H1.79655L0.0730043 20.2459C-0.145246 21.2184 0.133989 22.2307 0.801771 22.8877C1.47087 23.5459 2.39257 23.713 3.20693 23.3291L22.5707 14.1986C23.4524 13.7829 24 12.8509 24 11.7662C24 10.6815 23.4524 9.7494 22.5707 9.33375Z"
                                    fill="url(#paint0_linear)"
                                />
                            </g>
                            <defs>
                                <linearGradient
                                    id="paint0_linear"
                                    x1="-8.18183"
                                    y1="-8.72728"
                                    x2="27.2728"
                                    y2="29.4546"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#499DFC" />
                                    <stop offset="1" stop-color="#72B3FB" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div v-for="comment of comments" :key="comment.id" class="comment">
                        <svg
                            width="38"
                            height="38"
                            viewBox="0 0 38 38"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                            <circle cx="19" cy="19" r="19" fill="url(#pattern0)" />
                            <defs>
                                <pattern
                                    id="pattern0"
                                    patternContentUnits="objectBoundingBox"
                                    width="1"
                                    height="1"
                                >
                                    <use xlink:href="#image0" transform="scale(0.00226244)" />
                                </pattern>
                            </defs>
                        </svg>

                        <div class="content">
                            <div class="comment-text-wrapper">
                                <p @click="userAnswer(comment.name)" class="text-name">
                                    {{ comment.name }}
                                </p>
                                <p class="text-description">
                                    {{ comment.text }}
                                    <span class="comment-time"> {{ comment.time }}ч.</span>
                                </p>

                                <div
                                    v-if="comment.answers"
                                    @click="comment.showAnswers = !comment.showAnswers"
                                    class="answers"
                                    :style="{
                                        borderLeft: comment.showAnswers
                                            ? '1px solid black'
                                            : 'none',
                                        borderRadius: '3px',
                                        paddingLeft: comment.showAnswers ? '8px' : '0px',
                                    }"
                                >
                                    <div v-if="comment.showAnswers">
                                        <p
                                            class="answer"
                                            v-for="(answer, index) of comment.answers"
                                            :key="index"
                                        >
                                            {{ answer }}
                                        </p>
                                    </div>
                                    {{
                                        comment.showAnswers
                                            ? `Скрыть`
                                            : `Показать ответы (${comment.answers.length})`
                                    }}
                                    <svg
                                        :style="{
                                            transform: comment.showAnswers ? `rotate(180deg)` : '',
                                        }"
                                        class="answers-arrow"
                                        width="8"
                                        height="5"
                                        viewBox="0 0 8 5"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            opacity="0.5"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M7.21781 1.27152L4.03583 4.4535C3.84057 4.64876 3.52399 4.64876 3.32872 4.4535L0.146743 1.27152C-0.0485191 1.07626 -0.0485191 0.759677 0.146743 0.564415C0.342006 0.369153 0.658588 0.369153 0.85385 0.564415L3.68228 3.39284L6.5107 0.564415C6.70597 0.369153 7.02255 0.369153 7.21781 0.564415C7.41307 0.759677 7.41307 1.07626 7.21781 1.27152Z"
                                            fill="#292941"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div class="like-wrapper">
                                <svg
                                    @click="comment.liked = !comment.liked"
                                    width="19"
                                    :style="{ cursor: 'pointer' }"
                                    height="17"
                                    viewBox="0 0 19 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        :opacity="comment.liked ? '1' : '0.1'"
                                        d="M13.81 1.306C13.0336 0.463829 11.9681 0 10.8097 0C9.94389 0 9.15092 0.273743 8.45284 0.81356C8.10059 1.08604 7.78141 1.41941 7.5 1.80851C7.2187 1.41953 6.89941 1.08604 6.54705 0.81356C5.84908 0.273743 5.05611 0 4.19025 0C3.03188 0 1.96632 0.463829 1.18984 1.306C0.42263 2.13833 0 3.27541 0 4.50794C0 5.77652 0.472755 6.93775 1.48773 8.1625C2.39571 9.25804 3.70068 10.3702 5.21187 11.658C5.72788 12.0978 6.31279 12.5963 6.92013 13.1273C7.08057 13.2678 7.28645 13.3452 7.5 13.3452C7.71343 13.3452 7.91943 13.2678 8.07964 13.1275C8.68698 12.5964 9.27223 12.0977 9.78848 11.6576C11.2994 10.3701 12.6044 9.25804 13.5124 8.16238C14.5274 6.93775 15 5.77652 15 4.50783C15 3.27541 14.5774 2.13833 13.81 1.306Z"
                                        :fill="comment.liked ? '#469BFC' : 'grey'"
                                    />
                                </svg>
                                <p v-if="comment.like" class="like-count">{{ comment.like }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "@/components/desktop/Header";
import NewsItem from "@/components/desktop/NewsItem";

import image1 from "@/../public/img/img1.png";

const NewsOpen = {
    name: "NewsOpen",
    components: {
        NewsItem,
        Header,
    },
    data: () => ({
        lastScrollTop: 0,
        input: "",
        img: image1,
        news: [
            {
                date: "29 марта 2021",
                description:
                    "Ясность нашей позиции очевидна: выбранный нами инновационный путь однозначно необходимость.",
                views: 120,
                like: 600,
                dislike: 400,
                background: image1,
                id: 1,
            },
        ],
        comments: [
            {
                name: "petr.nikolaevi4",
                avatar: "",
                text: "сколько такой диван в долларах",
                like: 15,
                liked: false,
                answers: ["Ответ1", "Ответ2"],
                time: 4,
                id: 0,
                showAnswers: false,
            },
            {
                name: "n1kola3vi4",
                avatar: "",
                text: "Как узнать правильный ответ?",
                like: 54,
                time: 4,
                answers: ["Я думаю да"],
                id: 1,
                liked: true,
                showAnswers: false,
            },
            {
                name: "petr.nikolaevi4",
                avatar: "",
                text: "сколько такой диван в долларах",
                like: 0,
                time: 4,
                liked: false,
                id: 2,
                showAnswers: false,
            },
            {
                name: "petr.nikolaevi4",
                avatar: "",
                text: "сколько такой диван в долларах",
                like: 0,
                liked: true,
                time: 4,
                id: 3,
                showAnswers: false,
            },
            {
                name: "dima",
                avatar: "",
                text: "Как вас найти?",
                liked: false,
                like: 0,
                time: 4,
                id: 4,
                showAnswers: false,
            },
        ],
    }),
    computed: {
        commentsCount() {
            return this.comments.length;
        },
        postId() {
            return this.$route.params.post;
        },
    },
    methods: {
        scrollTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        },
        userAnswer(user) {
            this.input = `Ответ ${user} `;
        },
        handleScroll() {
            let pageY = window.pageYOffset;
            if (pageY > this.lastScrollTop) {
                document.getElementById("arrow-up").style.display = "block";
            } else {
                document.getElementById("arrow-up").style.display = "none";
            }
            this.lastScrollTop = pageY;
        },
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
    },
};
export default NewsOpen;
</script>

<style scoped>
.containerOuter {
    width: 940px;
    margin: 0 auto;
    position: relative;
}
.container {
    width: 700px;
    margin: 0 auto;
    background: #ffffff;
    border-radius: 25px;
}
.btn {
    position: fixed;
    top: 96px;
    width: 94px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 50px;
    color: rgb(255, 255, 255);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.76) 0%, rgba(0, 0, 0, 0.95) 100%);
}
.btn > p {
    margin-left: 10px;
}
.like-bar-wrapper {
    display: flex;
    justify-content: flex-end;
}
.like-bar {
    position: fixed;
    top: 96px;
    width: 82px;
    background: #ffffff;
    border-radius: 13px 13px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.like-item {
    height: 82px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.like-item:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.03);
}

/* Item */

.item {
    min-height: 439px;
    padding: 0px 40px 30px;
    display: flex;
    align-items: flex-end;
    mix-blend-mode: multiply;
    justify-content: center;
    position: relative;
}
.item-shadow {
    position: absolute;

    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.95;
    z-index: -1;
    background: linear-gradient(
        180deg,
        rgba(196, 196, 196, 0) 0%,
        rgba(0, 0, 0, 0.630208) 58.33%,
        #000000 100%
    );
}
.item-background {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -2;
}
.text-content {
    display: flex;
    flex-direction: column;
}
.date {
    color: #ffffff;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    opacity: 0.75;
}
.description {
    margin-top: 3px;
    font-weight: 600;
    font-size: 24px;
    line-height: 135%;
    color: #ffffff;
}
.rating {
    margin-top: 14px;
    display: flex;
    justify-content: space-between;
}
.views {
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
    color: #ffffff;
    opacity: 0.5;
}
.like-blog {
    display: flex;
}
.like {
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
    color: #ffffff;
    opacity: 0.5;
}
.dislike {
    display: flex;
    align-items: center;
    margin-left: 20px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
    color: #ffffff;
    opacity: 0.5;
}
.views > svg,
.like > svg,
.dislike > svg {
    margin-right: 8px;
}
.news-blog {
    padding: 30px 0px 55px 0px;
}
.text-wrapper {
    padding: 0px 60px 0px 40px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 185%;
    color: #292941;
}
.img-wrapper {
    min-height: 523px;
    margin: 30px 0px;
}
.blog-title {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 165%;
    color: #292941;
}
.blog-text {
    margin-top: 15px;
}
.comments {
    margin-top: 40px;
}
.arrow-up {
    position: fixed;
    top: 70vh;
    transform: translateX(-15px);
    cursor: pointer;
    transition: all 0.3s ease-in;
}
.comments-wrapper {
    margin: 50px 0px 40px;
    background: #ffffff;
    padding: 40px;
    border-radius: 25px;
}

.comments-count {
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    color: #292941;
}

.input-wrapper {
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
}
.input-wrapper > svg {
    cursor: pointer;
}
.input-wrapper > svg > g {
    transition: all 0.3s ease;
}
.input {
    min-height: 60px;
    background: #f7f7f9;
    border: 1px solid #ffffff;
    border-radius: 50px;
    flex: 1;
    margin-right: 25px;
    padding: 18px 30px;
    text-align: left;
}
.input::placeholder {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #292941;
    opacity: 0.5;
}
.comment {
    margin-bottom: 16px;
    display: flex;
    align-items: flex-start;
}
.comment:nth-child(3) {
    margin-top: 30px;
}
.comment-time {
    opacity: 0.5;
}
.content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    margin-left: 15px;
}
.comment-text-wrapper {
    display: flex;
    flex-direction: column;
}
.text-name {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #292941;
    opacity: 0.5;
}
.text-description {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    color: #292941;
}
.like-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.like-count {
    margin-top: 7px;
    opacity: 0.3;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 13px;
    text-align: center;
}
.answers {
    cursor: pointer;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #292941;
    opacity: 0.5;
}
.answers-arrow {
    margin-left: 6px;
}
.answer {
    margin-top: 4px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    opacity: 0.5;
}
</style>
