<script setup>
/* Full transparency, I don't quite know what the ID's do, but it doesnt work if I remove them. */
const posts = ref([
  {
    id: 1,
    label: "Entry 1",
    date: "Aug/27/2024",
    link: "/devlog/aug-27-2024",
  },
  { id: 2, label: "Entry 2", date: "Aug/28/2024", link: "/devlog/aug-28-2024" },
  { id: 3, label: "Entry 3", date: "Aug/30/2024", link: "/devlog/aug-30-2024" },
  { id: 4, label: "Entry 4", date: "Sep/4/2024", link: "/devlog/sep-4-2024" },
  { id: 5, label: "Entry 5", date: "Sep/5/2024", link: "/devlog/sep-5-2024" },
  { id: 6, label: "Entry 6", date: "Sep/6/2024", link: "/devlog/sep-6-2024" },
  { id: 7, label: "Entry 7", date: "Sep/9/2024", link: "/devlog/sep-9-2024" },
  { id: 8, label: "Entry 8", date: "Sep/12/2024", link: "/devlog/sep-12-2024" },
  { id: 9, label: "Entry 9", date: "Sep/28/2024", link: "/devlog/sep-28-2024" },
  { id: 10, label: "Entry 10", date: "Oct/3/2024", link: "/devlog/oct-3-2024" },
  { id: 11, label: "Entry 11", date: "Oct/6/2024", link: "/devlog/oct-6-2024" },
  {
    id: 12,
    label: "Entry 12",
    date: "Oct/12/2024",
    link: "/devlog/oct-12-2024",
  },
  {
    id: 13,
    label: "Entry 13",
    date: "Oct/20/2024",
    link: "/devlog/oct-20-2024",
  },
  {
    id: 14,
    label: "Entry 14",
    date: "Oct/27/2024",
    link: "/devlog/oct-27-2024",
  },
  { id: 15, label: "Entry 15", date: "Nov/2/2024", link: "/devlog/nov-2-2024" },
  { id: 16, label: "Entry 16", date: "Nov/8/2024", link: "/devlog/nov-8-2024" },
  {
    id: 17,
    label: "Entry 17",
    date: "Nov/15/2024",
    link: "/devlog/nov-15-2024",
  },
  {
    id: 18,
    label: "Entry 18",
    date: "Dec/2/2024 (for the week of Nov/18)",
    link: "/devlog/dec-2-2024",
  },
  { id: 19, label: "Entry 19", date: "Dec/8/2024", link: "/devlog/dec-8-2024" },
  {
    id: 20,
    label: "Entry 20",
    date: "Dec/11/2024",
    link: "/devlog/dec-11-2024",
  },
  {
    id: 21,
    label: "Entry 21",
    date: "Dec/17/2024 (No math segment)",
    link: "/devlog/dec-17-2024",
  },
  { id: 22, label: "Entry 22", date: "Jan/9/2025", link: "/devlog/jan-9-2025" },
  {
    id: 23,
    label: "Entry 23",
    date: "Jan/16/2025",
    link: "/devlog/jan-16-2025",
  },
  {
    id: 24,
    label: "Entry 24",
    date: "Jan/24/2025",
    link: "/devlog/jan-24-2025",
  },
  {
    id: 25,
    label: "Entry 25",
    date: "Jan/30/2025",
    link: "/devlog/jan-30-2025",
  },
  { id: 26, label: "Entry 26", date: "Feb/6/2025", link: "/devlog/feb-6-2025" },
  {
    id: 27,
    label: "Entry 27",
    date: "Feb/12/2025",
    link: "/devlog/feb-12-2025",
  },
  {
    id: 28,
    label: "Entry 28",
    date: "Feb/20/2025",
    link: "/devlog/feb-20-2025",
  },
  {
    id: 29,
    label: "Entry 29",
    date: "Feb/27/2025",
    link: "/devlog/feb-27-2025",
  },
  {
    id: 30,
    label: "Entry 30",
    date: "Mar/7/2025",
    link: "/devlog/mar-7-2025",
  },
  {
    id: 31,
    label: "Entry 31",
    date: "Mar/18/2025",
    link: "/devlog/mar-18-2025",
  },
  {
    id: 32,
    label: "Entry 32",
    date: "Mar/29/2025",
    link: "/devlog/mar-29-2025",
  },
  {
    id: 33,
    label: "Entry 33",
    date: "April/4/2025",
    link: "/devlog/apr-4-2025",
  },
  {
    id: 34,
    label: "Entry 34",
    date: "April/10/2025",
    link: "/devlog/apr-10-2025",
  },
]);
const testPosts = ref([
  {
    id: 1,
    label: "Test Page 1",
    date: "Eternal",
    link: "/devlog/coding-experiment",
  },
  { id: 1, label: "Test Page 2", date: "3000 BC", link: "/tester" },
]);
useHead({
  title: "Dev Blogs",
});
</script>

<template>
  <div>
    <!-- I forget to use my convienet <NuxtLayout>'s! I get warnings when I dont... -->
    <NuxtLayout>
      <h1>Game Development Blog</h1>
      <p>
        A weekly blog documenting my work as a video game designer and project
        manager. Currently working with a team of artists and programmers to
        create a first-person puzzle/exploration game in Unreal Engine 5.
      </p>

      <p>
        Entries from October 6th on include dedicated MATH SEGMENTS, where I
        take time to think about the math I use as I work on games.
      </p>
      <hr />
      <br />
      <!-- We use .slice().reverse() to order our blog posts newest first (as opposed to the order I add them in. Reversing is so I dont need to reorder every time I add a new post). -->
      <!-- You can find info on how I used the <BlogButton> and other components with props at "https://vuejs.org/guide/components/props.html#binding-multiple-properties-using-an-object" -->
      <BlogButton
        v-for="post in posts.slice().reverse()"
        :key="post.id"
        :label="post.label"
        :date="post.date"
        :link="post.link"
      />
      <hr />
      <h2>Test Pages</h2>
      <BlogButton
        v-for="testPost in testPosts"
        :key="testPost.id"
        :label="testPost.label"
        :date="testPost.date"
        :link="testPost.link"
      />
    </NuxtLayout>
  </div>
</template>
