# React useEffect Cleanup Function Error

This repository demonstrates a common error in React's `useEffect` hook: forgetting to include a cleanup function.  This can lead to memory leaks and unexpected behavior.

## The Bug

The `bug.js` file contains a `useEffect` hook that fetches data from an API. However, it's missing a cleanup function.  This means that if the component unmounts before the fetch completes, or if the component re-renders before the previous fetch completes, the previous fetch may not be properly cancelled.  This can lead to memory leaks and unexpected behavior.

## The Solution

The `bugSolution.js` file demonstrates the correct way to use the `useEffect` hook with a cleanup function to avoid memory leaks. The cleanup function ensures that any ongoing operations are cancelled when the component unmounts or the effect re-runs.