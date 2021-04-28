<template>
    <div>
        <div class="comments-wrapper">
            <p class="comments-count">{{ commentsCount }} комментария</p>
            <Comment
                v-for="comment of comments"
                :comment="comment"
                :key="comment.id"
                :userAnswer="userAnswer"
            />
        </div>
        <div class="input-wrapper">
            <input class="input" v-model="input" placeholder="Написать комментарий" />
            <svg
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
    </div>
</template>

<script>
import Comment from "../../components/mobile/Comment";

const Comments = {
    components: {
        Comment,
    },
    data: () => ({
        input: "",
        comments: [
            {
                name: "petr.nikolaevi4",
                avatar: "",
                text: "сколько такой диван в долларах",
                like: 15,
                answers: ["Ответ1", "Ответ2"],
                time: 4,
                id: 0,
            },
            {
                name: "n1kola3vi4",
                avatar: "",
                text:
                    "Прежде всего, внедрение современных методик предоставляет широкие возможности для стандартных подходов. Господа, перспективное планирование позволяет выполнить важные задания по разработке модели развития. Задача организации, в особенности же граница обучения кадров говорит о возможностях экспериментов, поражающих по своей масштабности и грандиозности.",
                like: 54,
                time: 4,
                answers: ["Я думаю да"],

                id: 1,
            },
            {
                name: "petr.nikolaevi4",
                avatar: "",
                text: "сколько такой диван в долларах",
                like: 0,
                time: 4,
                id: 2,
            },
            {
                name: "petr.nikolaevi4",
                avatar: "",
                text: "сколько такой диван в долларах",
                like: 0,
                time: 4,
                id: 3,
            },
            {
                name: "petr.nikolaevi4",
                avatar: "",
                text: "сколько такой диван в долларах",
                like: 0,
                time: 4,
                id: 4,
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
        userAnswer(user) {
            this.input = `Ответ ${user} `;
        },
    },
};
export default Comments;
</script>

<style scoped>
.comments-wrapper {
    bottom: 0;
    max-width: 600px;
    height: 50vh;
    position: absolute;
    background: #ffffff;
    border-radius: 13px 13px 0px 0px;
    padding: 25px 23px 0 23px;
    overflow: auto;
}
.comments-wrapper::-webkit-scrollbar {
    display: none;
}
.comments-count {
    position: relative;
    margin-bottom: 20px;
    text-align: center;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    justify-content: center;
}

.input-wrapper {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    max-width: 600px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 18px;
    background: #ffffff;
    border-top: 1px solid rgba(0, 0, 0, 0.03);
    border-bottom: 1px solid rgba(0, 0, 0, 0.03);
}
.input-wrapper > svg {
    cursor: pointer;
}
.input-wrapper > svg > g {
    transition: all 0.3s ease;
}
.input {
    min-height: 44px;
    background: #f7f7f9;
    border: 1px solid #ffffff;
    border-radius: 100px;
    flex: 1;
    margin-right: 20px;
    padding: 13px 14px;
    text-align: left;
}
</style>
