# 📝 Live Text Metrics App 📊

Welcome to the **Live Text Metrics App**! This application is designed to provide live counts and metrics for any text you input. It calculates word count, character count (including spaces), character count (excluding spaces and punctuation), numbers count, sum of numbers, and the average word length.

## 🎯 Purpose

This application was created to provide live metrics on the text entered by the user. It counts:
- Words
- Characters (including spaces)
- Characters (excluding spaces and punctuation)
- Numbers
- Count of numbers
- Sum of the numbers
- Average word length

## ⚠️ Usage Considerations

- **Word Delimiters**: The application uses spaces to divide words. If words are not separated by spaces, they will be counted as one.
- **Characters Without Spaces**: Spaces and punctuation are excluded from this count. Punctuation is defined by RAE guidelines: [RAE Punctuation](https://www.rae.es/ortograf%C3%ADa/signos-de-puntuaci%C3%B3n).
- **Clear Metrics Button**: Clears the text area.
- **Number Parsing**: Numbers with a trailing period are treated as integers unless they have a decimal point. For example, `2.` becomes `2`, and `2.1.` remains `2.1`.
- **Reverse Functionality**: The application updates metrics as you delete text.
- **Embedded Numbers**: Numbers embedded within words are counted as characters, not separate numbers.
- **Alphabetical Words**: The application does not validate if words contain only alphabetical characters. Everything separated by spaces is considered a word.
- **Average Word Length**: Always displayed with two decimal places.

## 🖼️ Design

The application features a minimalist design with a high-contrast color scheme, using black text on a white background for better readability.

## 🔧 How It Works

1. **Text Input**:
   - Enter your text into the provided text area.
   - The app calculates and displays metrics based on your input.

2. **Metrics Displayed**:
   - Word Count
   - Character Count (including spaces)
   - Character Count (excluding spaces and punctuation)
   - Number Count
   - Sum of Numbers
   - Average Word Length

3. **Functionality**:
   - **Clear Text**: Use the "Clear Metrics" button to reset the text area.
   - **Live Update**: The app updates metrics in real-time as you type or delete text.

## 🛠️ Technologies Used

- HTML
- CSS (for styling)
- JavaScript

## 📚 Development Journey

1. **Initial Planning**:
   - Reviewed the project requirements and acceptance criteria.
   - Created a plan with daily objectives, which were completed ahead of schedule.

2. **HTML & CSS**:
   - Completed HTML and CSS on the first day. Fixed issues with class usage with the help of a team member.

3. **JavaScript Functions**:
   - **Word Count**: Implemented using `split` method after trimming spaces. Encountered and resolved issues with space handling.
   - **Character Count**: Used `split` to count individual characters. Discovered that leaving the separator empty splits into single characters.
   - **Space Counting**: Initially struggled with regular expressions but switched to using loops for a better solution.
   - **Average Word Length**: Calculated by summing word lengths and dividing by the word count. Used `toFixed` to display results with two decimals.

4. **Number Handling**:
   - **Number Counting**: Faced challenges with identifying numbers within text. Utilized `isNaN` and `Number` methods for validation. Managed trailing periods with `endsWith` and `substring` methods.
   - **Sum of Numbers**: Used `filter` and `map` methods to process and sum numbers. Employed `forEach` to accumulate the sum.

## 🔗 Live Demo

Check out the live demo of the application https://cathe1905.github.io/Live-Text-Metrics-App/src/.

## 📧 Contact

Feel free to reach out with any questions or feedback!
