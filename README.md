# Creating A Advanced Youtube App 

- It have all the advanced feature of YouTube Like
    - Auto Recommendation
    - Infinite Scroll
    - Live Chat
    - Comments
      and etc.



## Higher Order Component

In React, a higher-order component is a function that takes a component as an argument and returns a new component that wraps the original component.

HOCs allow you to add additional functionality to a component without modifying the component's code. For example, you can use a HOC to add authentication or routing capabilities to a component or to apply a specific style or behavior to multiple components.

HOCs can take additional arguments, which lets you customize the behavior of the HOC. This makes them a flexible and reusable way to add functionality to your components.

Example :

      export const HOC = ({ info }) => {
        return (
          <div className="p-1 m-1 border-teal-900 bg-pink-300 rounded-lg">
            <VideoCard info={info}/>
          </div>
        );
      };


## Debouncing

Let's understand this with an example. Suppose we have an input element that gets some data when we type something. For example, let's say we type any pin-code, and it returns some data.

But there is a catch here. Let's say our pin-code is 800001. If we type the first character, that is 8, we will send request to the backend server. Then we type 0, and we will send another request to the server, and so on.  

This calls the API so many times, and in turn overuses the requests. So, to prevent this, we use something called a debounce function.

So to achieve this, we have a feature in JavaScript called Debouncing.

So, perform Debouncing, it is good to fix some time intervar in api call..



## Youtube Search Suggestion
- API => http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=Query

      useEffect(() => {
        // Make a api call for every key press for search suggestion after a 200ms
        const timer = setTimeout(() => getSearchSuggestion(), 200);

        // stoping the function call for every key press, call one time after a specific given timeout
        return () => {
          clearTimeout(timer);
        };
      }, [searchQuery]);

      const getSearchSuggestion = async () => {
        const res = await fetch(YOUTUBE_SEARCH_SEGGESTION + searchQuery);
        const data = await res.json();
        console.log(data[1]);
      };