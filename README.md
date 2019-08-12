# GoodMorning


## GoodMorning

GoodMorning is a morning routine manager app meant to provide an easy and intuitive way to start your day off right. Unlike most task managers that focus on completing tasks once, Good Day allows you to build a set of **habits** that are essential to setting you up for a successful day. 

Most people have things they need to do every morning, like ensuring their laptop is in their bag or taking vitamins. Sometimes, however, there are tasks that should only be done under certain **conditions**, like taking an umbrella to work only if its supposed to rain. These conditional tasks are the core feature of Good Day and set it apart from other task managers.

## Tech Stack

* React Native for UI/Frontend
* Express/MongoDB Atlas for backend storage/access -- [See repo for backend server here](https://github.com/garrettwelson/Good-Morning-Backend)
* Dark Sky API for weather

## User Stories for MVP

1. When the user opens the app, they see a simple two-button interface that allows them to configure their morning or start their day
2. When the user clicks to configure their morning, they are brought to a list of existing tasks in their morning routine
   * The user can see existing tasks
   * The user can click an existing task to see its configuration details and optionally delete it
   * The user can input new tasks with given conditions and see it added to the list of tasks 
3. When the user clicks to start their day, they see an ordered list of their routine items 
     * Conditional items will only render as appropriate (i.e. "rain" items will only appear if its supposed to rain on a given day)
     * Tasks will have a "complete" button next to them to trigger completion for that day. They will disappear from the view when they are completed 

## User Stories for Stretch Goals

1. Users can re-order tasks from the task configuration screen. This order persists to the task list when it re-renders
2. When the user finishes the last task in their routine for a given morning, the app checks their commute time to the office and determines if they have any "extra" time before needing to leave. If so, it pulls a random task from a collection of "nice-to-do" tasks, like writing an email to an old friend, meditating, etc.


