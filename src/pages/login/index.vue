<template>
  <main>
    <form @submit="onSubmit">
      <label for="email">ID</label>
      <input
        id="email"
        type="text"
        v-model="email"
        v-bind="emailAttrs"
        placeholder="아이디를 입력해주세요."
      />
      <span v-show="errors.email">잘못된 이메일입니다.</span>
      <label for="password">Password</label>
      <input
        id="password"
        type="password"
        v-model="password"
        v-bind="passwordAttrs"
        placeholder="비밀번호를 입력해주세요."
      />
      <span v-show="errors.password">잘못된 비밀번호입니다.</span>
      <button>Login</button>
    </form>
  </main>
</template>
<script lang="ts" setup>
import { useForm } from "vee-validate";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().min(8).required(),
  drink: yup.string().required(),
  food: yup.array(),
});

const { defineField, errors, handleSubmit, resetForm } = useForm({
  validationSchema: schema,
});

const [email, emailAttrs] = defineField("email");
const [password, passwordAttrs] = defineField("password");

const onSubmit = handleSubmit((values) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Submitited", JSON.stringify(values, null, 2));
      resetForm();
      resolve("Success");
    }, 2000);
  });
});
</script>
<style lang=""></style>
