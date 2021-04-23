<template>
  <div class="content">
    <div class="news-background" :style="newsBackground"></div>
    <div class="post">
      <div class="pipe" />
      <p class="comments-count">326 комментариев</p>
      <div v-for="(comment, index) of comments" :key="index" class="comment">
        <div class="text-wrapper">
          <p class="text-name">{{ comment.name }}</p>
          <svg
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.1"
              d="M13.81 1.306C13.0336 0.463829 11.9681 0 10.8097 0C9.94389 0 9.15092 0.273743 8.45284 0.81356C8.10059 1.08604 7.78141 1.41941 7.5 1.80851C7.2187 1.41953 6.89941 1.08604 6.54705 0.81356C5.84908 0.273743 5.05611 0 4.19025 0C3.03188 0 1.96632 0.463829 1.18984 1.306C0.42263 2.13833 0 3.27541 0 4.50794C0 5.77652 0.472755 6.93775 1.48773 8.1625C2.39571 9.25804 3.70068 10.3702 5.21187 11.658C5.72788 12.0978 6.31279 12.5963 6.92013 13.1273C7.08057 13.2678 7.28645 13.3452 7.5 13.3452C7.71343 13.3452 7.91943 13.2678 8.07964 13.1275C8.68698 12.5964 9.27223 12.0977 9.78848 11.6576C11.2994 10.3701 12.6044 9.25804 13.5124 8.16238C14.5274 6.93775 15 5.77652 15 4.50783C15 3.27541 14.5774 2.13833 13.81 1.306Z"
              fill="black"
            />
          </svg>
        </div>
        <div class="like-wrapper">
          <p class="text-description">{{ comment.text }}</p>
          <p class="like-count">{{ comment.like }}</p>
        </div>
        <div v-if="comment.answers" class="answers">
          Показать ответы ({{ comment.answers.length }})
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img from "../mobile/assets/news/News1.png";

export default {
  name: "Post",
  data() {
    return {
      newsBackground: {
        background: `url(${img}) no-repeat`,
        height: "450px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      },
      postId: this.$route.params.post,
      comments: [
        {
          name: "petr.nikolaevi4",
          avatar: "",
          text: "сколько такой диван в долларах",
          like: 15,
          answers: [1, 2],
        },
        {
          name: "n1kola3vi4",
          avatar: "",
          text:
            "Прежде всего, внедрение современных методик предоставляет широкие возможности для стандартных подходов. Господа, перспективное планирование позволяет выполнить важные задания по разработке модели развития. Задача организации, в особенности же граница обучения кадров говорит о возможностях экспериментов, поражающих по своей масштабности и грандиозности.",
          like: 54,
        },
        {
          name: "petr.nikolaevi4",
          avatar: "",
          text: "сколько такой диван в долларах",
          like: 0,
        },
      ],
    };
  },
};
</script>

<style scoped>
.post {
  top: 50%;
  position: absolute;
  background: #ffffff;
  border-radius: 13px 13px 0px 0px;
  padding: 25px 23px 40px 23px;
}
.pipe {
  top: -10px;
  left: calc(50% - 40px / 2 + 0.5px);
  width: 40px;
  height: 4px;
  position: absolute;
  background: #ffffff;
  border-radius: 80px;
}

.comments-count {
  margin-bottom: 20px;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
}
.comment {
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
}
.text-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text-name {
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  opacity: 0.5;
}
.text-description {
  margin-top: 4px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
}
.like-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
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
  margin-top: 6px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  opacity: 0.5;
}
</style>
