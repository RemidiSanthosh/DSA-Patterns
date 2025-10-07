document.addEventListener('DOMContentLoaded', () => {
    // Array of algorithm data
    const algorithms = [
        // Prefix Sum content now has the new sections and no code block header
        {
            name: 'Prefix Sum',
            imageUrl: 'photos/prefixSum.jpg',
            modalHeaderImage: 'photos/header.jpg',
            content: `
                <div class="modal-header-image" style="background-image: url('photos/prefixSum.jpg');"></div>
                <div class="modal-body">

                    <h2>Prefix Sum</h2>
                    <h2>🔍 Prefix Sum Template Problems</h2>

<hr>

<h3> 1D Prefix Sum – Subarray Sum</h3>
<p>Used to compute the sum of subarrays in constant time.</p>

<h4>🧠 How to Approach:</h4>
<ol>
  <li>Identify if the question asks for <b>sum of elements in a subarray or range</b>.</li>
  <li>Precompute prefix sums so each subarray sum can be found in <b>O(1)</b> time.</li>
  <li>Use the formula <code>prefix[j + 1] - prefix[i]</code> to get the sum between <code>i</code> and <code>j</code>.</li>
  <li>Great for range sum or query-based problems.</li>
</ol>

<h4>Key Template:</h4>
<pre><code>int[] prefix = new int[n + 1];
for (int i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + nums[i];
}
// Sum of subarray nums[i...j] = prefix[j + 1] - prefix[i]</code></pre>

<p><b>LeetCode Problems:</b></p>
<ul>
  <li>LC 560. Subarray Sum Equals K</li>
  <li>LC 724. Find Pivot Index</li>
  <li>LC 53. Maximum Subarray (Kadane's variant)</li>
  <li>LC 303. Range Sum Query - Immutable</li>
</ul>

<hr>

<h3>2️⃣ Prefix Sum with HashMap – Subarrays with Target Sum</h3>
<p>Used when tracking count of sums up to current index for any subarray with given sum.</p>

<h4>🧠 How to Approach:</h4>
<ol>
  <li>Use this when you need to <b>count subarrays</b> that meet a target sum condition.</li>
  <li>Maintain a <b>running prefix sum</b> and use a HashMap to store the frequency of sums.</li>
  <li>At each step, check if <code>(sum - k)</code> exists in the map — it represents a valid subarray.</li>
  <li>Best for problems involving <b>subarray count or frequency-based conditions</b>.</li>
</ol>

<h4>Key Template:</h4>
<pre><code>Map&lt;Integer, Integer&gt; sumCount = new HashMap&lt;&gt;();
sumCount.put(0, 1);
int sum = 0, count = 0;

for (int num : nums) {
    sum += num;
    if (sumCount.containsKey(sum - k)) {
        count += sumCount.get(sum - k);
    }
    sumCount.put(sum, sumCount.getOrDefault(sum, 0) + 1);
}</code></pre>

<p><b>LeetCode Problems:</b></p>
<ul>
  <li>LC 560. Subarray Sum Equals K</li>
  <li>LC 974. Subarray Sums Divisible by K</li>
  <li>LC 437. Path Sum III</li>
</ul>

<hr>

<h3>3️⃣ 2D Prefix Sum – Matrix Region Sum</h3>
<p>Used to compute sum of submatrices quickly.</p>

<h4>🧠 How to Approach:</h4>
<ol>
  <li>Use this when the question deals with <b>sum of elements in a submatrix</b>.</li>
  <li>Build a 2D prefix matrix where each cell stores the sum of all elements above and left.</li>
  <li>Compute any region sum in <b>O(1)</b> using the inclusion-exclusion formula.</li>
  <li>Ideal for <b>matrix sum queries</b> and <b>dynamic programming on grids</b>.</li>
</ol>

<h4>Key Template:</h4>
<pre><code>int[][] prefix = new int[m + 1][n + 1];
for (int i = 1; i <= m; i++) {
    for (int j = 1; j <= n; j++) {
        prefix[i][j] = matrix[i - 1][j - 1]
                     + prefix[i - 1][j]
                     + prefix[i][j - 1]
                     - prefix[i - 1][j - 1];
    }
}</code></pre>

<p><b>LeetCode Problems:</b></p>
<ul>
  <li>LC 304. Range Sum Query 2D - Immutable</li>
  <li>LC 363. Max Sum of Rectangle No Larger Than K</li>
</ul>

<hr>

<h3>4️⃣ Prefix XOR (Bitwise Prefix)</h3>
<p>Used when dealing with XOR of subarrays.</p>

<h4>🧠 How to Approach:</h4>
<ol>
  <li>Use this when problems involve <b>XOR of subarrays or submatrices</b>.</li>
  <li>Maintain a running prefix XOR — it behaves like prefix sum but with XOR instead of +.</li>
  <li>The XOR of any subarray <code>i...j</code> is <code>prefix[j + 1] ^ prefix[i]</code>.</li>
  <li>Common in problems dealing with <b>bit manipulation or parity checks</b>.</li>
</ol>

<h4>Key Template:</h4>
<pre><code>int[] prefixXor = new int[n + 1];
for (int i = 0; i < n; i++) {
    prefixXor[i + 1] = prefixXor[i] ^ nums[i];
}
// XOR of subarray nums[i...j] = prefixXor[j + 1] ^ prefixXor[i]</code></pre>

<p><b>LeetCode Problems:</b></p>
<ul>
  <li>LC 1310. XOR Queries of a Subarray</li>
  <li>LC 1738. Find Kth Largest XOR Coordinate Value</li>
</ul>

<hr>

<h3>5️⃣ Difference Array – Range Updates (Prefix Variant)</h3>
<p>Efficiently apply range updates to arrays.</p>

<h4>🧠 How to Approach:</h4>
<ol>
  <li>Apply this when the problem has <b>multiple range update operations</b> (e.g., “add value to range”).</li>
  <li>Use a difference array to record changes only at the <b>start</b> and <b>end+1</b> of each range.</li>
  <li>Reconstruct the final array using prefix sums at the end.</li>
  <li>Great for problems involving <b>interval updates or efficient modifications</b>.</li>
</ol>

<h4>Key Template:</h4>
<pre><code>int[] diff = new int[n + 1];
diff[start] += val;
diff[end + 1] -= val;

// Then reconstruct actual array:
int[] res = new int[n];
res[0] = diff[0];
for (int i = 1; i < n; i++) {
    res[i] = res[i - 1] + diff[i];
}</code></pre>

<p><b>LeetCode Problems:</b></p>
<ul>
  <li>LC 370. Range Addition</li>
  <li>LC 1094. Car Pooling</li>
  <li>LC 1109. Corporate Flight Bookings</li>
</ul>

<hr>

<h3>📈 Prefix Sum Summary Table</h3>
<table border="1" cellpadding="6">
  <tr><th>Pattern</th><th>Use Case Examples</th></tr>
  <tr><td>1D Prefix Sum</td><td>Subarray sums, range sums</td></tr>
  <tr><td>Prefix Sum + HashMap</td><td>Count of subarrays with given sums</td></tr>
  <tr><td>2D Prefix Sum</td><td>Matrix subregions, quick sum lookups</td></tr>
  <tr><td>Prefix XOR</td><td>XOR subarray patterns</td></tr>
  <tr><td>Difference Array</td><td>Efficient range update problems</td></tr>
</table>
`
        },
        // Two Pointers content
        {
            name: 'Two Pointers',
            imageUrl: 'photos/twoPointer.jpg',
            modalHeaderImage: 'photos/twoPointer_detail.jpg',
            content: `
                <div class="modal-header-image" style="background-image: url('photos/twoPointer.jpg');"></div>
                <div class="modal-body">
                  <h1>🔁 Two Pointers</h1>

<h2>🔍 Two Pointers Coding Patterns You Must Know</h2>
<p>The <b>Two Pointers</b> technique is one of the <b>most versatile patterns</b> in DSA.  
It involves maintaining two indices (pointers) to iterate through arrays, strings, or linked lists efficiently —  
often reducing O(n²) solutions to O(n).</p>

<hr>

<h3>✅ <b>1. Opposite Ends (Start and End Pointers)</b></h3>

<p><b>When to Use:</b></p>
<ul>
<li>When the array/string is <b>sorted</b> or partially sorted.</li>
<li>When you need to find <b>pairs</b> or check <b>palindromes</b> efficiently.</li>
<li>Used in problems involving <b>sum of two elements</b> or <b>mirror traversal</b>.</li>
</ul>

<p><b>Approach:</b></p>
<ul>
<li>Initialize one pointer at the start (<code>left</code>) and one at the end (<code>right</code>).</li>
<li>Move the pointers inward based on the condition (sum too small → left++, too large → right--).</li>
<li>Continue until they meet or cross.</li>
</ul>

<pre><code class="language-java">
int left = 0, right = arr.length - 1;
while (left < right) {
    int sum = arr[left] + arr[right];
    if (sum == target) {
        return new int[]{left, right};
    } else if (sum < target) {
        left++;
    } else {
        right--;
    }
}
</code></pre>

<p><b>LeetCode Problems:</b></p>
<ul>
<li><input type="checkbox"> <a href="https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" target="_blank">LC 167. Two Sum II - Input array is sorted</a></li>
<li><input type="checkbox"> <a href="https://leetcode.com/problems/valid-palindrome/" target="_blank">LC 125. Valid Palindrome</a></li>
<li><input type="checkbox"> <a href="https://leetcode.com/problems/reverse-string/" target="_blank">LC 344. Reverse String</a></li>
</ul>

<hr>

<h3>✅ <b>2. Same Direction (Sliding Window)</b></h3>

<p><b>When to Use:</b></p>
<ul>
<li>When you need to process <b>contiguous subarrays</b> or <b>substrings</b>.</li>
<li>Common in optimization problems like <b>maximum/minimum length</b> or <b>sum</b>.</li>
<li>Ideal for handling <b>frequency maps</b> or <b>unique character windows</b>.</li>
</ul>

<p><b>Approach:</b></p>
<ul>
<li>Start both pointers from the beginning.</li>
<li>Expand the <code>right</code> pointer to grow the window.</li>
<li>Shrink the <code>left</code> pointer when a condition breaks (like duplicates or exceeding a limit).</li>
<li>Update the result (length or count) after each iteration.</li>
</ul>

<pre><code class="language-java">
int left = 0, right = 0;
while (right < s.length()) {
    // Expand the window
    window.add(s.charAt(right));
    right++;

    // Shrink if condition not met
    while (window condition not met) {
        window.remove(s.charAt(left));
        left++;
    }

    // Update result if needed
    result = Math.max(result, right - left);
}
</code></pre>

<p><b>LeetCode Problems:</b></p>
<ul>
<li><input type="checkbox"> <a href="https://leetcode.com/problems/longest-substring-without-repeating-characters/" target="_blank">LC 3. Longest Substring Without Repeating Characters</a></li>
<li><input type="checkbox"> <a href="https://leetcode.com/problems/minimum-window-substring/" target="_blank">LC 76. Minimum Window Substring</a></li>
<li><input type="checkbox"> <a href="https://leetcode.com/problems/find-all-anagrams-in-a-string/" target="_blank">LC 438. Find All Anagrams in a String</a></li>
</ul>

<hr>

<h3>✅ <b>3. Fast and Slow Pointers (Cycle Detection)</b></h3>

<p><b>When to Use:</b></p>
<ul>
<li>When traversing a structure that may form a <b>loop or cycle</b> (like linked lists).</li>
<li>When you need to find the <b>middle element</b> efficiently.</li>
<li>When memory usage must stay <b>O(1)</b>.</li>
</ul>

<p><b>Approach:</b></p>
<ul>
<li>Move one pointer one step (<code>slow</code>) and another two steps (<code>fast</code>).</li>
<li>If they meet → there’s a cycle.</li>
<li>If <code>fast</code> or <code>fast.next</code> becomes <code>null</code> → no cycle.</li>
</ul>

<pre><code class="language-java">
ListNode slow = head, fast = head;
while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) return true; // Cycle found
}
</code></pre>

<p><b>LeetCode Problems:</b></p>
<ul>
<li><input type="checkbox"> <a href="https://leetcode.com/problems/linked-list-cycle/" target="_blank">LC 141. Linked List Cycle</a></li>
<li><input type="checkbox"> <a href="https://leetcode.com/problems/middle-of-the-linked-list/" target="_blank">LC 876. Middle of the Linked List</a></li>
<li><input type="checkbox"> <a href="https://leetcode.com/problems/palindrome-linked-list/" target="_blank">LC 234. Palindrome Linked List</a></li>
</ul>

<hr>

<h3>✅ <b>4. Partitioning (Dutch National Flag / In-place swaps)</b></h3>

<p><b>When to Use:</b></p>
<ul>
<li>When rearranging elements based on <b>conditions or values</b>.</li>
<li>Used for <b>in-place sorting</b> without extra space.</li>
<li>Helps segregate elements like 0s, 1s, 2s or negatives and positives.</li>
</ul>

<p><b>Approach:</b></p>
<ul>
<li>Use three pointers — <code>low</code>, <code>mid</code>, and <code>high</code>.</li>
<li>Iterate with <code>mid</code> and perform swaps based on conditions.</li>
<li>Ensures partitioning in one pass (O(n) time).</li>
</ul>

<pre><code class="language-java">
int low = 0, mid = 0, high = arr.length - 1;
while (mid <= high) {
    if (arr[mid] == 0) {
        swap(arr, low++, mid++);
    } else if (arr[mid] == 1) {
        mid++;
    } else {
        swap(arr, mid, high--);
    }
}
</code></pre>

<p><b>LeetCode Problems:</b></p>
<ul>
<li><input type="checkbox"> <a href="https://leetcode.com/problems/sort-colors/" target="_blank">LC 75. Sort Colors</a></li>
<li><input type="checkbox"> <a href="https://leetcode.com/problems/move-zeroes/" target="_blank">LC 283. Move Zeroes</a></li>
<li><input type="checkbox"> <a href="https://leetcode.com/problems/remove-duplicates-from-sorted-array/" target="_blank">LC 26. Remove Duplicates from Sorted Array</a></li>
</ul>

<hr>

<h3>✅ <b>5. Merging Two Sorted Arrays / Lists</b></h3>

<p><b>When to Use:</b></p>
<ul>
<li>When combining two <b>sorted lists or arrays</b> into one sorted output.</li>
<li>Used in <b>merge sort</b> and <b>stream merging</b> problems.</li>
</ul>

<p><b>Approach:</b></p>
<ul>
<li>Use two pointers — each pointing to the start of both arrays.</li>
<li>Compare and pick the smaller element, then move that pointer forward.</li>
<li>Continue until one array is fully traversed.</li>
</ul>

<pre><code class="language-java">
int i = 0, j = 0;
while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
        result.add(arr1[i++]);
    } else {
        result.add(arr2[j++]);
    }
}
</code></pre>

<p><b>LeetCode Problems:</b></p>
<ul>
<li><input type="checkbox"> <a href="https://leetcode.com/problems/merge-sorted-array/" target="_blank">LC 88. Merge Sorted Array</a></li>
<li><input type="checkbox"> <a href="https://leetcode.com/problems/merge-two-sorted-lists/" target="_blank">LC 21. Merge Two Sorted Lists</a></li>
<li><input type="checkbox"> <a href="https://leetcode.com/problems/squares-of-a-sorted-array/" target="_blank">LC 977. Squares of a Sorted Array</a></li>
</ul>

<hr>

<h2>📌 Two Pointers Summary Table</h2>

<table border="1" cellpadding="6">
<tr><th>Pattern</th><th>When to Use</th><th>Example Problems</th></tr>
<tr>
<td>Opposite Ends</td>
<td>Finding pairs, palindromes, or two-sum in sorted arrays</td>
<td>LC 167, LC 125, LC 344</td>
</tr>
<tr>
<td>Same Direction (Sliding)</td>
<td>Subarrays/substrings with constraints or optimization goals</td>
<td>LC 3, LC 76, LC 438</td>
</tr>
<tr>
<td>Fast & Slow</td>
<td>Cycle detection, middle node, palindrome check in linked lists</td>
<td>LC 141, LC 876, LC 234</td>
</tr>
<tr>
<td>Partitioning</td>
<td>In-place rearrangement like sorting 0s,1s,2s or moving zeroes</td>
<td>LC 75, LC 283, LC 26</td>
</tr>
<tr>
<td>Merging</td>
<td>Combining two sorted arrays/lists efficiently</td>
<td>LC 88, LC 21, LC 977</td>
</tr>
</table>`
        },
        // The remaining algorithms without content
        { name: 'Fast and Slow Pointers', imageUrl: 'photos/Fast&Slow.jpeg',
          content: `
          <div class="modal-header-image" style="background-image: url('photos/Fast&Slow.jpeg');"></div>
                <div class="modal-body">
          
          <h1>🐢🐇 Fast & Slow Pointers Pattern for Interviews</h1>

<p>The <b>Fast and Slow Pointers</b> technique (also called the <b>Tortoise and Hare algorithm</b>) is a simple yet powerful method used to <b>detect cycles</b>, <b>find midpoints</b>, or handle problems where elements need to be traversed at different speeds — all in <b>O(n)</b> time and <b>O(1)</b> space.</p>

<p>You’ll mainly use this pattern to:</p>
<ul>
  <li>Detect <b>cycles</b> in linked lists or arrays</li>
  <li>Find the <b>middle node</b> of a linked list</li>
  <li>Detect <b>duplicate numbers</b> in arrays (cycle-based logic)</li>
  <li>Check for <b>palindromes</b> in linked lists</li>
</ul>

<hr>

<h2>🔹 1. Cycle Detection in Linked Lists</h2>
<p><b>When to Use:</b></p>
<ul>
  <li>When you need to check if a linked list contains a loop.</li>
  <li>Common in problems involving infinite traversals or repeated nodes.</li>
</ul>

<p><b>Approach:</b></p>
<ul>
  <li>Move one pointer one step at a time (<code>slow</code>) and another two steps at a time (<code>fast</code>).</li>
  <li>If they ever meet, a cycle exists.</li>
  <li>If <code>fast</code> or <code>fast.next</code> becomes <code>null</code>, the list has no cycle.</li>
</ul>

<pre><code>public boolean hasCycle(ListNode head) {
    ListNode slow = head, fast = head;

    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) return true;
    }
    return false;
}
</code></pre>

<p><b>LeetCode Problems:</b></p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/linked-list-cycle/" target="_blank">LC 141. Linked List Cycle</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/linked-list-cycle-ii/" target="_blank">LC 142. Linked List Cycle II</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/circular-array-loop/" target="_blank">LC 457. Circular Array Loop</a></li>
</ul>

<hr>

<h2>🔹 2. Find Start of the Cycle</h2>
<p><b>When to Use:</b></p>
<ul>
  <li>Once a cycle is detected and you need to find its entry point.</li>
  <li>Common follow-up to the standard cycle detection problem.</li>
</ul>

<p><b>Approach:</b></p>
<ul>
  <li>Detect the cycle using fast and slow pointers.</li>
  <li>Reset one pointer to head and move both one step at a time until they meet again.</li>
  <li>The meeting node is the start of the cycle.</li>
</ul>

<pre><code>public ListNode detectCycle(ListNode head) {
    ListNode slow = head, fast = head;

    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow == fast) {
            ListNode entry = head;
            while (entry != slow) {
                entry = entry.next;
                slow = slow.next;
            }
            return entry;
        }
    }
    return null;
}
</code></pre>

<p><b>LeetCode Problems:</b></p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/linked-list-cycle-ii/" target="_blank">LC 142. Linked List Cycle II</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/find-the-duplicate-number/" target="_blank">LC 287. Find the Duplicate Number</a></li>
</ul>

<hr>

<h2>🔹 3. Find Middle of a Linked List</h2>
<p><b>When to Use:</b></p>
<ul>
  <li>You need to find the middle element of a linked list in one traversal.</li>
  <li>Useful in problems like splitting lists or checking palindromes.</li>
</ul>

<p><b>Approach:</b></p>
<ul>
  <li>Move the fast pointer twice as fast as the slow pointer.</li>
  <li>When fast reaches the end, slow will be at the middle.</li>
</ul>

<pre><code>public ListNode middleNode(ListNode head) {
    ListNode slow = head, fast = head;

    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}
</code></pre>

<p><b>LeetCode Problems:</b></p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/middle-of-the-linked-list/" target="_blank">LC 876. Middle of the Linked List</a></li>
</ul>

<hr>

<h2>🔹 4. Palindrome Linked List</h2>
<p><b>When to Use:</b></p>
<ul>
  <li>To check if a linked list reads the same forward and backward.</li>
</ul>

<p><b>Approach:</b></p>
<ul>
  <li>Use the fast and slow pointer to find the middle.</li>
  <li>Reverse the second half of the list.</li>
  <li>Compare the first and second halves node by node.</li>
</ul>

<pre><code>public boolean isPalindrome(ListNode head) {
    if (head == null || head.next == null) return true;

    ListNode slow = head, fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    ListNode prev = null;
    while (slow != null) {
        ListNode next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }

    ListNode left = head, right = prev;
    while (right != null) {
        if (left.val != right.val) return false;
        left = left.next;
        right = right.next;
    }

    return true;
}
</code></pre>

<p><b>LeetCode Problems:</b></p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/palindrome-linked-list/" target="_blank">LC 234. Palindrome Linked List</a></li>
</ul>

<hr>

<h2>🔹 5. Detect Cycle in Array (Floyd’s Tortoise and Hare)</h2>
<p><b>When to Use:</b></p>
<ul>
  <li>When the array has numbers pointing to next indices (like a graph), and you can’t modify it.</li>
  <li>Helps find a duplicate or loop in O(1) space.</li>
</ul>

<p><b>Approach:</b></p>
<ul>
  <li>Treat array values as pointers (index jumps).</li>
  <li>Use fast and slow pointers to detect a cycle.</li>
  <li>Use the same method as linked list to find the entry point (duplicate number).</li>
</ul>

<pre><code>public int findDuplicate(int[] nums) {
    int slow = nums[0];
    int fast = nums[0];

    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow != fast);

    slow = nums[0];
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return slow;
}
</code></pre>

<p><b>LeetCode Problems:</b></p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/find-the-duplicate-number/" target="_blank">LC 287. Find the Duplicate Number</a></li>
</ul>

<hr>

<h2>🔹 6. Circular Behavior in Arrays</h2>
<p><b>When to Use:</b></p>
<ul>
  <li>When elements wrap around in a circular manner (like modulo indexing).</li>
  <li>Use pointers and modular arithmetic to detect loops.</li>
</ul>

<p><b>LeetCode Problems:</b></p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/circular-array-loop/" target="_blank">LC 457. Circular Array Loop</a></li>
</ul>

<hr>

<h2>📊 Fast & Slow Pointers Summary Table</h2>
<table border="1" cellpadding="8">
  <tr>
    <th>Pattern</th>
    <th>Use Case</th>
    <th>Key Problems</th>
  </tr>
  <tr>
    <td>Cycle Detection</td>
    <td>Detect loop in linked list</td>
    <td>
      <input type="checkbox"> <a href="https://leetcode.com/problems/linked-list-cycle/" target="_blank">LC 141</a>,
      <input type="checkbox"> <a href="https://leetcode.com/problems/linked-list-cycle-ii/" target="_blank">LC 142</a>,
      <input type="checkbox"> <a href="https://leetcode.com/problems/circular-array-loop/" target="_blank">LC 457</a>
    </td>
  </tr>
  <tr>
    <td>Find Start of Cycle</td>
    <td>Locate start of loop</td>
    <td>
      <input type="checkbox"> <a href="https://leetcode.com/problems/linked-list-cycle-ii/" target="_blank">LC 142</a>,
      <input type="checkbox"> <a href="https://leetcode.com/problems/find-the-duplicate-number/" target="_blank">LC 287</a>
    </td>
  </tr>
  <tr>
    <td>Find Middle Node</td>
    <td>Return middle element</td>
    <td>
      <input type="checkbox"> <a href="https://leetcode.com/problems/middle-of-the-linked-list/" target="_blank">LC 876</a>
    </td>
  </tr>
  <tr>
    <td>Palindrome Linked List</td>
    <td>Check if list is palindrome</td>
    <td>
      <input type="checkbox"> <a href="https://leetcode.com/problems/palindrome-linked-list/" target="_blank">LC 234</a>
    </td>
  </tr>
  <tr>
    <td>Detect Cycle in Array</td>
    <td>Find duplicate using cycle</td>
    <td>
      <input type="checkbox"> <a href="https://leetcode.com/problems/find-the-duplicate-number/" target="_blank">LC 287</a>
    </td>
  </tr>
  <tr>
    <td>Circular Behavior</td>
    <td>Loop detection in arrays</td>
    <td>
      <input type="checkbox"> <a href="https://leetcode.com/problems/circular-array-loop/" target="_blank">LC 457</a>
    </td>
  </tr>
</table>`
         },
        { name: 'Sliding Window', imageUrl: 'photos/slidingWindow.jpeg' ,
            content: `
            <div class="modal-header-image" style="background-image: url('photos/slidingWindow.jpeg');"></div>
                <div class="modal-body">
    <h1>🪟 Sliding Window</h1>
  <h2>🔍 Sliding Window Code Patterns in Java</h2>

  <!-- Fixed Size Sliding Window -->
  <h3>✅ 1. Fixed-Size Sliding Window</h3>

  <p><strong>When to Use:</strong></p>
  <ul>
    <li>When the <strong>window size (k)</strong> is fixed.</li>
    <li>Used to find <strong>maximum/minimum/sum/average</strong> of subarrays of size <code>k</code>.</li>
    <li>Common in problems dealing with <strong>continuous sequences</strong> of elements.</li>
  </ul>

  <p><strong>Approach:</strong></p>
  <ul>
    <li>Initialize two pointers: <code>start</code> and <code>end</code>.</li>
    <li>Expand the window by adding the current element to the sum.</li>
    <li>Once the window reaches size <code>k</code>, process the result (e.g., update max sum).</li>
    <li>Slide the window by removing the element at <code>start</code>.</li>
    <li>Continue until the end of the array.</li>
  </ul>

  <pre><code class="language-java">
public int fixedWindow(int[] nums, int k) {
    int maxSum = 0, windowSum = 0;

    for (int end = 0; end &lt; nums.length; end++) {
        windowSum += nums[end];

        if (end &gt;= k - 1) {
            maxSum = Math.max(maxSum, windowSum);
            windowSum -= nums[end - k + 1];
        }
    }

    return maxSum;
}
  </code></pre>

  <p><strong>Examples:</strong></p>
  <ul>
    <li><input type="checkbox"> <a href="https://leetcode.com/problems/sliding-window-maximum/" target="_blank">LC 239. Sliding Window Maximum</a></li>
    <li><input type="checkbox"> <a href="https://leetcode.com/problems/maximum-average-subarray-i/" target="_blank">LC 643. Maximum Average Subarray I</a></li>
  </ul>

  <hr>

  <!-- Variable Size Sliding Window -->
  <h3>✅ 2. Variable-Size Sliding Window (Shrinking Window)</h3>

  <p><strong>When to Use:</strong></p>
  <ul>
    <li>When the <strong>window size changes dynamically</strong> based on constraints.</li>
    <li>Ideal for problems like <strong>smallest substring with condition</strong>.</li>
    <li>Often used with <strong>HashMaps</strong> or <strong>frequency arrays</strong> to track counts.</li>
  </ul>

  <p><strong>Approach:</strong></p>
  <ul>
    <li>Expand the window by moving <code>right</code> until the condition is met.</li>
    <li>Once valid, <strong>shrink from left</strong> to minimize window size.</li>
    <li>Continuously update result (like <code>minLength</code>).</li>
    <li>Repeat until the <code>right</code> pointer reaches the end.</li>
  </ul>

  <pre><code class="language-java">
public int variableWindow(String s) {
    Map&lt;Character, Integer&gt; window = new HashMap&lt;&gt;();
    int left = 0, right = 0;
    int result = Integer.MAX_VALUE;

    while (right &lt; s.length()) {
        char c = s.charAt(right);
        window.put(c, window.getOrDefault(c, 0) + 1);
        right++;

        while (/* condition satisfied */) {
            result = Math.min(result, right - left);

            char leftChar = s.charAt(left);
            window.put(leftChar, window.get(leftChar) - 1);
            if (window.get(leftChar) == 0) window.remove(leftChar);
            left++;
        }
    }

    return result == Integer.MAX_VALUE ? 0 : result;
}
  </code></pre>

  <p><strong>Examples:</strong></p>
  <ul>
    <li><input type="checkbox"> <a href="https://leetcode.com/problems/minimum-window-substring/" target="_blank">LC 76. Minimum Window Substring</a></li>
    <li><input type="checkbox"> <a href="https://leetcode.com/problems/longest-substring-without-repeating-characters/" target="_blank">LC 3. Longest Substring Without Repeating Characters</a></li>
    <li><input type="checkbox"> <a href="https://leetcode.com/problems/find-all-anagrams-in-a-string/" target="_blank">LC 438. Find All Anagrams in a String</a></li>
  </ul>

  <hr>

  <!-- Sliding Window with Frequency Array -->
  <h3>✅ 3. Sliding Window with Frequency Array (Optimized for Lowercase Letters)</h3>

  <p><strong>When to Use:</strong></p>
  <ul>
    <li>When input only contains <strong>lowercase letters ('a'–'z')</strong>.</li>
    <li>When you need faster lookups than <code>HashMap</code>.</li>
    <li>Best for <strong>anagram</strong>, <strong>permutation</strong>, and <strong>substring comparison</strong> problems.</li>
  </ul>

  <p><strong>Approach:</strong></p>
  <ul>
    <li>Maintain a frequency array of size 26.</li>
    <li>Expand <code>right</code> and update frequency count.</li>
    <li>When condition breaks, shrink window from <code>left</code>.</li>
    <li>Track maximum/minimum length as needed.</li>
  </ul>

  <pre><code class="language-java">
public int slidingWindowFreq(String s) {
    int[] freq = new int[26];
    int left = 0, right = 0;
    int maxLength = 0;

    while (right &lt; s.length()) {
        freq[s.charAt(right) - 'a']++;
        right++;

        while (/* invalid condition */) {
            freq[s.charAt(left) - 'a']--;
            left++;
        }

        maxLength = Math.max(maxLength, right - left);
    }

    return maxLength;
}
  </code></pre>

  <p><strong>Examples:</strong></p>
  <ul>
    <li><input type="checkbox"> <a href="https://leetcode.com/problems/minimum-window-substring/" target="_blank">LC 76. Minimum Window Substring</a></li>
    <li><input type="checkbox"> <a href="https://leetcode.com/problems/longest-substring-without-repeating-characters/" target="_blank">LC 3. Longest Substring Without Repeating Characters</a></li>
    <li><input type="checkbox"> <a href="https://leetcode.com/problems/permutation-in-string/" target="_blank">LC 567. Permutation in String</a></li>
    <li><input type="checkbox"> <a href="https://leetcode.com/problems/find-all-anagrams-in-a-string/" target="_blank">LC 438. Find All Anagrams in a String</a></li>
    <li><input type="checkbox"> <a href="https://leetcode.com/problems/longest-repeating-character-replacement/" target="_blank">LC 424. Longest Repeating Character Replacement</a></li>
    <li><input type="checkbox"> <a href="https://leetcode.com/problems/valid-anagram/" target="_blank">LC 242. Valid Anagram</a></li>
  </ul>

  <hr>

  <!-- Summary Table -->
  <h2>📌 Summary: When to Use Which</h2>
  <table border="1" cellspacing="0" cellpadding="8">
    <thead>
      <tr>
        <th>Pattern</th>
        <th>When to Use</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Fixed-size window</td>
        <td>Subarrays with fixed length</td>
        <td>Max/Min/Sum of <code>k</code> elements</td>
      </tr>
      <tr>
        <td>Variable-size window</td>
        <td>Substrings or sequences satisfying a condition</td>
        <td>Unique characters, valid substring</td>
      </tr>
      <tr>
        <td>Frequency array window</td>
        <td>String-based problems (a–z), high performance</td>
        <td>Anagrams, permutations, replacements</td>
      </tr>
    </tbody>
  </table>
`
        },
        { name: 'Min/Max Heap and Quick Select', imageUrl: 'photos/min&max.jpeg' ,
            content: `<div class="modal-header-image" style="background-image: url('photos/min&max.jpeg');"></div>
                <div class="modal-body">
                
                <h1>⛰️ Min/Max Heap and Quickselect Patterns</h1>
<p>The <b>"Top K Elements"</b> pattern helps efficiently find the largest, smallest, or most frequent <code>K</code> items in a collection.  
Depending on the constraints, we solve it using <b>Heaps</b> (Min/Max) or <b>Quickselect</b> for optimal trade-offs between time and space.</p>

<hr>

<h2>✅ 1. Min Heap Pattern</h2>

<p><b>When to Use:</b></p>
<ul>
  <li>When you need to keep track of the <b>top K largest elements</b>.</li>
  <li>Best for problems involving <b>frequencies</b> or <b>continuous top K tracking</b>.</li>
  <li>Efficiently removes smallest items to maintain K largest.</li>
</ul>

<p><b>Approach:</b></p>
<ul>
  <li>Use a <b>Min Heap</b> of size K.</li>
  <li>Iterate through the array, push elements to heap.</li>
  <li>If heap exceeds size K, pop the smallest.</li>
  <li>At the end, the heap contains the K largest elements.</li>
</ul>

<pre><code class="language-java">
import java.util.*;

class TopKMinHeap {
    public List&lt;Integer&gt; findTopKElements(int[] nums, int k) {
        PriorityQueue&lt;Integer&gt; minHeap = new PriorityQueue&lt;&gt;(k); // min-heap
        for (int num : nums) {
            minHeap.offer(num);
            if (minHeap.size() &gt; k) {
                minHeap.poll(); // remove smallest
            }
        }
        return new ArrayList&lt;&gt;(minHeap);
    }
}
</code></pre>

<p>✅ <b>Time Complexity:</b> O(n log k)</p>

<p><b>LeetCode Problems:</b></p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/kth-largest-element-in-an-array/" target="_blank">LC 215. Kth Largest Element in an Array</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/top-k-frequent-elements/" target="_blank">LC 347. Top K Frequent Elements</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/top-k-frequent-words/" target="_blank">LC 692. Top K Frequent Words</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/k-closest-points-to-origin/" target="_blank">LC 973. K Closest Points to Origin</a></li>
</ul>

<hr>

<h2>✅ 2. Max Heap Pattern</h2>

<p><b>When to Use:</b></p>
<ul>
  <li>When you need to track <b>k smallest elements</b>.</li>
  <li>Useful when you want elements in <b>descending order</b>.</li>
  <li>Can also be used for streaming or median-like problems.</li>
</ul>

<p><b>Approach:</b></p>
<ul>
  <li>Use a <b>Max Heap</b> with a custom comparator.</li>
  <li>Push elements to heap; if size &gt; K, pop the largest.</li>
  <li>Remaining elements represent the smallest K.</li>
</ul>

<pre><code class="language-java">
import java.util.*;

class TopKMaxHeap {
    public List&lt;Integer&gt; findKSmallestElements(int[] nums, int k) {
        PriorityQueue&lt;Integer&gt; maxHeap = new PriorityQueue&lt;&gt;((a, b) -&gt; b - a); // max-heap
        for (int num : nums) {
            maxHeap.offer(num);
            if (maxHeap.size() &gt; k) {
                maxHeap.poll(); // remove largest
            }
        }
        return new ArrayList&lt;&gt;(maxHeap);
    }
}
</code></pre>

<p>✅ <b>Time Complexity:</b> O(n log k)</p>

<p><b>LeetCode Problems:</b></p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/kth-largest-element-in-a-stream/" target="_blank">LC 703. Kth Largest Element in a Stream</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/" target="_blank">LC 1439. Kth Smallest Sum of a Matrix With Sorted Rows</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/find-median-from-data-stream/" target="_blank">LC 295. Find Median from Data Stream</a></li>
</ul>

<hr>

<h2>✅ 3. Quickselect Pattern (Partition-based)</h2>

<p><b>When to Use:</b></p>
<ul>
  <li>When you only need the <b>Kth largest/smallest element</b>, not all top K elements.</li>
  <li>Average O(n) — faster than heap in most practical cases.</li>
  <li>Does not require extra space.</li>
</ul>

<p><b>Approach:</b></p>
<ul>
  <li>Partition array around a pivot (like QuickSort).</li>
  <li>Recurse into the partition that contains the Kth element.</li>
  <li>Stop once the pivot index == Kth position.</li>
</ul>

<pre><code class="language-java">
import java.util.*;

class TopKQuickSelect {
    public int findKthLargest(int[] nums, int k) {
        int n = nums.length;
        return quickSelect(nums, 0, n - 1, n - k);
    }

    private int quickSelect(int[] nums, int left, int right, int kSmallest) {
        if (left == right) return nums[left];

        Random rand = new Random();
        int pivotIndex = left + rand.nextInt(right - left + 1);
        pivotIndex = partition(nums, left, right, pivotIndex);

        if (pivotIndex == kSmallest) return nums[pivotIndex];
        else if (pivotIndex &lt; kSmallest)
            return quickSelect(nums, pivotIndex + 1, right, kSmallest);
        else
            return quickSelect(nums, left, pivotIndex - 1, kSmallest);
    }

    private int partition(int[] nums, int left, int right, int pivotIndex) {
        int pivot = nums[pivotIndex];
        swap(nums, pivotIndex, right);
        int storeIndex = left;

        for (int i = left; i &lt; right; i++) {
            if (nums[i] &lt; pivot) {
                swap(nums, storeIndex, i);
                storeIndex++;
            }
        }
        swap(nums, right, storeIndex);
        return storeIndex;
    }

    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}
</code></pre>

<p>✅ <b>Time Complexity:</b> O(n) average, O(n²) worst case</p>

<p><b>LeetCode Problems:</b></p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/kth-largest-element-in-an-array/" target="_blank">LC 215. Kth Largest Element in an Array</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/k-closest-points-to-origin/" target="_blank">LC 973. K Closest Points to Origin</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/wiggle-sort-ii/" target="_blank">LC 324. Wiggle Sort II</a></li>
</ul>

<hr>

<h2>📊 Breakdown of Problem Types</h2>
<table border="1" cellspacing="0" cellpadding="8">
  <thead>
    <tr>
      <th>Problem Type</th>
      <th>Example Problems</th>
      <th>Best Pattern</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Top K largest elements</td>
      <td>
        <a href="https://leetcode.com/problems/kth-largest-element-in-an-array/" target="_blank">LC 215</a>, 
        <a href="https://leetcode.com/problems/top-k-frequent-elements/" target="_blank">LC 347</a>
      </td>
      <td>Min Heap</td>
    </tr>
    <tr>
      <td>Top K smallest elements</td>
      <td>
        <a href="https://leetcode.com/problems/kth-largest-element-in-a-stream/" target="_blank">LC 703</a>, 
        <a href="https://leetcode.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/" target="_blank">LC 1439</a>
      </td>
      <td>Max Heap</td>
    </tr>
    <tr>
      <td>Kth largest/smallest element</td>
      <td>
        <a href="https://leetcode.com/problems/kth-largest-element-in-an-array/" target="_blank">LC 215</a>
      </td>
      <td>Quickselect</td>
    </tr>
    <tr>
      <td>Top K frequent (numbers/words)</td>
      <td>
        <a href="https://leetcode.com/problems/top-k-frequent-elements/" target="_blank">LC 347</a>, 
        <a href="https://leetcode.com/problems/top-k-frequent-words/" target="_blank">LC 692</a>
      </td>
      <td>Min Heap (with Map)</td>
    </tr>
    <tr>
      <td>Closest K points / elements</td>
      <td>
        <a href="https://leetcode.com/problems/k-closest-points-to-origin/" target="_blank">LC 973</a>, 
        <a href="https://leetcode.com/problems/find-k-closest-elements/" target="_blank">LC 658</a>
      </td>
      <td>Min Heap or Quickselect</td>
    </tr>
    <tr>
      <td>Running Median</td>
      <td>
        <a href="https://leetcode.com/problems/find-median-from-data-stream/" target="_blank">LC 295</a>
      </td>
      <td>Two Heaps (min + max)</td>
    </tr>
  </tbody>
</table>

<hr>

<h2>✅ Summary: When to Use What</h2>
<table border="1" cellspacing="0" cellpadding="8">
  <thead>
    <tr>
      <th>Pattern</th>
      <th>When to Use</th>
      <th>Time Complexity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Min Heap</td>
      <td>Top K largest elements, frequency-based problems</td>
      <td>O(n log k)</td>
    </tr>
    <tr>
      <td>Max Heap</td>
      <td>Top K smallest elements, descending order extraction</td>
      <td>O(n log k)</td>
    </tr>
    <tr>
      <td>Quickselect</td>
      <td>Finding only the Kth largest/smallest element</td>
      <td>O(n) average, O(n²) worst</td>
    </tr>
    <tr>
      <td>Two Heaps</td>
      <td>Median problems (real-time streams)</td>
      <td>O(log n) per insert</td>
    </tr>
  </tbody>
</table>`
        },
        { name: 'Monotonic Queue', imageUrl: 'photos/queue.jpeg' ,
            content: `<div class="modal-header-image" style="background-image: url('photos/queue.jpeg');"></div>
                <div class="modal-body">
                <h1>📈 Monotonic Queue Pattern</h1>

<p>Monotonic queues optimize <b>sliding window maximum/minimum</b> problems or any scenario where you need the max/min over a dynamic range.  
They use a <b>deque</b> to maintain a sorted window of indices for O(n) solutions.</p>

<hr>

<h2>✅ When to Use Monotonic Queue</h2>
<ul>
  <li>Sliding window minimum/maximum problems.</li>
  <li>Next/previous greater or smaller element queries.</li>
  <li>Optimizing brute-force sliding window logic from O(nk) to O(n).</li>
  <li>Maintaining order of elements in a dynamic range.</li>
</ul>

<h2>✅ Approach</h2>
<ul>
  <li>Use a <b>deque</b> to store indices of elements.</li>
  <li>Maintain increasing/decreasing order depending on min/max requirement.</li>
  <li>Remove indices that fall out of the current window.</li>
  <li>Add the front of the deque to result once the first window is processed.</li>
</ul>

<hr>

<h2>🧰 Java Template: Sliding Window Maximum</h2>

<pre><code class="language-java">
public int[] maxSlidingWindow(int[] nums, int k) {
    if (nums == null || k <= 0) return new int[0];

    int n = nums.length;
    int[] result = new int[n - k + 1];
    Deque<Integer> deque = new LinkedList<>();

    for (int i = 0; i &lt; n; i++) {
        // Remove indices out of window
        while (!deque.isEmpty() &amp;&amp; deque.peekFirst() &lt; i - k + 1) {
            deque.pollFirst();
        }

        // Maintain decreasing order in deque
        while (!deque.isEmpty() &amp;&amp; nums[deque.peekLast()] &lt; nums[i]) {
            deque.pollLast();
        }

        // Add current index
        deque.offerLast(i);

        // Add result once window is complete
        if (i &gt;= k - 1) {
            result[i - k + 1] = nums[deque.peekFirst()];
        }
    }
    return result;
}
</code></pre>

<h2>🔁 For Sliding Window Minimum</h2>
<p>Just flip the comparison:</p>
<pre><code class="language-java">
nums[deque.peekLast()] &gt; nums[i] // Maintain increasing order
</code></pre>

<hr>

<h2>📌 Classic LeetCode Problems</h2>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/sliding-window-maximum/" target="_blank">LC 239. Sliding Window Maximum</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/" target="_blank">LC 862. Shortest Subarray with Sum ≥ K</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/constrained-subsequence-sum/" target="_blank">LC 1425. Constrained Subsequence Sum</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/" target="_blank">LC 1438. Longest Subarray with Limit</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/jump-game-vi/" target="_blank">LC 1696. Jump Game VI</a></li>
</ul>

<hr>

<h2>📊 Summary Table: Monotonic Queue Patterns</h2>
<table border="1" cellspacing="0" cellpadding="8">
<thead>
<tr>
  <th>Problem Type</th>
  <th>Example Problems</th>
  <th>Queue Type / Pattern</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Sliding Window Maximum</td>
  <td><a href="https://leetcode.com/problems/sliding-window-maximum/" target="_blank">LC 239</a></td>
  <td>Monotonic Decreasing Queue</td>
</tr>
<tr>
  <td>Sliding Window Minimum / Shortest Subarray Sum ≥ K</td>
  <td><a href="https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/" target="_blank">LC 862</a></td>
  <td>Monotonic Increasing Queue</td>
</tr>
<tr>
  <td>Constrained Subsequence / DP + Window Max</td>
  <td><a href="https://leetcode.com/problems/constrained-subsequence-sum/" target="_blank">LC 1425</a></td>
  <td>Monotonic Decreasing Queue</td>
</tr>
<tr>
  <td>Max-Min Window / Limit Constraint</td>
  <td><a href="https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/" target="_blank">LC 1438</a></td>
  <td>Two Monotonic Queues (Max + Min)</td>
</tr>
<tr>
  <td>DP + Monotonic Queue</td>
  <td><a href="https://leetcode.com/problems/jump-game-vi/" target="_blank">LC 1696</a></td>
  <td>Decreasing Max Queue</td>
</tr>
</tbody>
</table>
`
        },
        { name: 'Greedy Algorithm', imageUrl: 'photos/greedy.jpeg',
            content: `<div class="modal-header-image" style="background-image: url('photos/greedy.jpeg');"></div>
                <div class="modal-body">
                <h1>🚀 Greedy Algorithm Pattern</h1>

<p>A <b>greedy algorithm</b> makes a <b>locally optimal choice</b> at each step with the hope that it leads to a globally optimal solution.  
Greedy algorithms <b>don’t backtrack</b> and <b>don’t revisit decisions</b>.</p>

<hr>

<h2>✅ When to Use Greedy</h2>
<ul>
  <li>Local optimum leads to global optimum (can be proven).</li>
  <li>Optimization problems: min/max results, min coins, max value, etc.</li>
  <li>Problem allows sorting or selection based on criteria.</li>
  <li>No overlapping subproblems (not suitable for DP).</li>
</ul>

<h2>✅ Approach</h2>
<ul>
  <li>Identify if the problem allows choosing best-so-far at each step.</li>
  <li>Sort or prioritize items if required.</li>
  <li>Use a greedy choice (pick max/min/fit) iteratively until finished.</li>
  <li>Verify if greedy choice guarantees global optimum (proof or pattern recognition).</li>
</ul>

<hr>

<h2>🧰 Greedy Code Templates</h2>

<h3>1. Greedy with Sorting</h3>
<pre><code class="language-java">
public int greedySort(int[][] items) {
    Arrays.sort(items, (a, b) -&gt; b[1] - a[1]); // descending by value
    int result = 0;
    for (int[] item : items) {
        if (/* capacity or condition */) {
            result += item[1];
        }
    }
    return result;
}
</code></pre>
<p>📌 Examples:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/maximum-units-on-a-truck/" target="_blank">LC 1710. Maximum Units on a Truck</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/non-overlapping-intervals/" target="_blank">LC 435. Non-overlapping Intervals</a></li>
</ul>

<h3>2. Greedy with PriorityQueue (Heap)</h3>
<pre><code class="language-java">
public int greedyPQ(int[] tasks) {
    PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
    for (int task : tasks) maxHeap.offer(task);
    while (!maxHeap.isEmpty()) {
        int top = maxHeap.poll();
        // process task
    }
    return /* result */;
}
</code></pre>
<p>📌 Examples:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/task-scheduler/" target="_blank">LC 621. Task Scheduler</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/meeting-rooms-ii/" target="_blank">LC 253. Meeting Rooms II</a></li>
</ul>

<h3>3. Greedy with Two Pointers</h3>
<pre><code class="language-java">
public int greedyTwoPointers(int[] a, int[] b) {
    Arrays.sort(a); Arrays.sort(b);
    int i = 0, j = 0, result = 0;
    while (i &lt; a.length &amp;&amp; j &lt; b.length) {
        if (/* a[i] fits in b[j] */) {
            result++; i++; j++;
        } else {
            j++;
        }
    }
    return result;
}
</code></pre>
<p>📌 Examples:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/assign-cookies/" target="_blank">LC 455. Assign Cookies</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/" target="_blank">LC 122. Best Time to Buy and Sell Stock II</a></li>
</ul>

<h3>4. Greedy on Intervals</h3>
<pre><code class="language-java">
public int greedyInterval(int[][] intervals) {
    Arrays.sort(intervals, (a, b) -&gt; a[1] - b[1]); // sort by end time
    int count = 0, end = Integer.MIN_VALUE;
    for (int[] interval : intervals) {
        if (interval[0] &gt;= end) {
            count++; end = interval[1];
        }
    }
    return count;
}
</code></pre>
<p>📌 Examples:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/non-overlapping-intervals/" target="_blank">LC 435. Non-overlapping Intervals</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/" target="_blank">LC 452. Minimum Number of Arrows to Burst Balloons</a></li>
</ul>

<hr>

<h2>📊 Summary Table: Greedy Patterns</h2>
<table border="1" cellspacing="0" cellpadding="8">
<thead>
<tr>
  <th>Pattern</th>
  <th>Use Case</th>
  <th>Key Function / Approach</th>
  <th>Example Problem</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Sorting-Based Greedy</td>
  <td>Choose items by priority</td>
  <td>Arrays.sort(), pick optimal item iteratively</td>
  <td><a href="https://leetcode.com/problems/maximum-units-on-a-truck/" target="_blank">LC 1710</a></td>
</tr>
<tr>
  <td>PriorityQueue-Based Greedy</td>
  <td>Always pick current best option</td>
  <td>PriorityQueue (max/min heap), poll top each step</td>
  <td><a href="https://leetcode.com/problems/task-scheduler/" target="_blank">LC 621</a></td>
</tr>
<tr>
  <td>Two Pointers Greedy</td>
  <td>Match/fit elements from two sorted arrays</td>
  <td>Two-pointer traversal on sorted arrays</td>
  <td><a href="https://leetcode.com/problems/assign-cookies/" target="_blank">LC 455</a></td>
</tr>
<tr>
  <td>Interval Scheduling</td>
  <td>Avoid overlapping intervals</td>
  <td>Sort by end/start, pick non-overlapping</td>
  <td><a href="https://leetcode.com/problems/non-overlapping-intervals/" target="_blank">LC 435</a></td>
</tr>
<tr>
  <td>Stock Profit Problems</td>
  <td>Maximize profit from buy/sell</td>
  <td>Compare prices greedily</td>
  <td><a href="https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/" target="_blank">LC 122</a></td>
</tr>
</tbody>
</table>
`
         },
        { name: 'Overlapping Intervals', imageUrl: 'photos/overlapping.jpeg' ,
            content: `<div class="modal-header-image" style="background-image: url('photos/overlapping.jpeg');"></div>
                <div class="modal-body">

                <h1>📚 Overlapping Intervals Patterns</h1>

<p>Intervals problems often involve sorting by start or end time, then merging, detecting overlaps, or inserting in the correct position.</p>

<hr>

<h2>🔹 1. Merge Intervals</h2>
<p><b>When to Use:</b> Combine all overlapping intervals into merged intervals.</p>
<p><b>Approach:</b> Sort intervals by start time. Maintain a current interval and merge overlapping ones.</p>

<pre><code class="language-java">
Arrays.sort(intervals, (a, b) -&gt; a[0] - b[0]);
List&lt;int[]&gt; merged = new ArrayList<>();
int[] current = intervals[0];
for (int i = 1; i &lt; intervals.length; i++) {
    if (intervals[i][0] &lt;= current[1]) {
        current[1] = Math.max(current[1], intervals[i][1]);
    } else {
        merged.add(current);
        current = intervals[i];
    }
}
merged.add(current);
</code></pre>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/merge-intervals/" target="_blank">LC 56. Merge Intervals</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/insert-interval/" target="_blank">LC 57. Insert Interval</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/interval-list-intersections/" target="_blank">LC 986. Interval List Intersections</a></li>
</ul>

<hr>

<h2>🔹 2. Insert Interval</h2>
<p><b>When to Use:</b> Insert a new interval into a list of non-overlapping intervals, merging if necessary.</p>
<p><b>Approach:</b> Add all intervals before new interval, merge overlapping intervals, then add remaining intervals.</p>

<pre><code class="language-java">
List&lt;int[]&gt; result = new ArrayList<>();
int i = 0, n = intervals.length;
// Add intervals before newInterval
while (i &lt; n &amp;&amp; intervals[i][1] &lt; newInterval[0]) result.add(intervals[i++]);
// Merge overlaps
while (i &lt; n &amp;&amp; intervals[i][0] &lt;= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
}
result.add(newInterval);
// Add remaining
while (i &lt; n) result.add(intervals[i++]);
</code></pre>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/insert-interval/" target="_blank">LC 57. Insert Interval</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/range-module/" target="_blank">LC 715. Range Module</a></li>
</ul>

<hr>

<h2>🔹 3. Interval Scheduling (Greedy — Max Non-Overlapping Intervals)</h2>
<p><b>When to Use:</b> Find the maximum number of non-overlapping intervals or minimum removals.</p>
<p><b>Approach:</b> Sort by end time. Iteratively select intervals whose start is >= previous end.</p>

<pre><code class="language-java">
Arrays.sort(intervals, (a, b) -&gt; a[1] - b[1]);
int count = 0, end = Integer.MIN_VALUE;
for (int[] interval : intervals) {
    if (interval[0] &gt;= end) {
        count++;
        end = interval[1];
    }
}
return intervals.length - count; // min removals
</code></pre>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/non-overlapping-intervals/" target="_blank">LC 435. Non-overlapping Intervals</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/" target="_blank">LC 452. Minimum Number of Arrows to Burst Balloons</a></li>
</ul>

<hr>

<h2>🔹 4. Sweep Line Technique (Sorting + Active Intervals)</h2>
<p><b>When to Use:</b> Count active intervals at any time, such as minimum meeting rooms.</p>
<p><b>Approach:</b> Sort start and end times separately. Iterate through starts, increment rooms if start &lt; current end, else move end pointer.</p>

<pre><code class="language-java">
int n = intervals.length;
int[] starts = new int[n], ends = new int[n];
for (int i = 0; i &lt; n; i++) { starts[i] = intervals[i][0]; ends[i] = intervals[i][1]; }
Arrays.sort(starts); Arrays.sort(ends);
int rooms = 0, endPtr = 0;
for (int start : starts) {
    if (start &lt; ends[endPtr]) rooms++;
    else endPtr++;
}
return rooms;
</code></pre>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/meeting-rooms-ii/" target="_blank">LC 253. Meeting Rooms II</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/car-pooling/" target="_blank">LC 1094. Car Pooling</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/employee-free-time/" target="_blank">LC 759. Employee Free Time</a></li>
</ul>

<hr>

<h2>📊 Summary Table — Overlapping Interval Patterns</h2>
<table border="1" cellspacing="0" cellpadding="8">
<thead>
<tr>
  <th>Pattern</th>
  <th>When to Use</th>
  <th>Approach</th>
  <th>Example Problems</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Merge Intervals</td>
  <td>Combine overlapping ranges</td>
  <td>Sort by start, merge overlapping intervals</td>
  <td><a href="https://leetcode.com/problems/merge-intervals/" target="_blank">LC 56</a>, <a href="https://leetcode.com/problems/interval-list-intersections/" target="_blank">LC 986</a></td>
</tr>
<tr>
  <td>Insert Interval</td>
  <td>Insert while maintaining overlaps</td>
  <td>Add intervals before new, merge overlapping, add remaining</td>
  <td><a href="https://leetcode.com/problems/insert-interval/" target="_blank">LC 57</a>, <a href="https://leetcode.com/problems/range-module/" target="_blank">LC 715</a></td>
</tr>
<tr>
  <td>Interval Scheduling (Greedy)</td>
  <td>Maximize non-overlapping intervals</td>
  <td>Sort by end, pick intervals with start &gt;= prev end</td>
  <td><a href="https://leetcode.com/problems/non-overlapping-intervals/" target="_blank">LC 435</a>, <a href="https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/" target="_blank">LC 452</a></td>
</tr>
<tr>
  <td>Sweep Line</td>
  <td>Count active intervals at a time</td>
  <td>Sort starts &amp; ends, iterate starts, increment rooms if overlap</td>
  <td><a href="https://leetcode.com/problems/meeting-rooms-ii/" target="_blank">LC 253</a>, <a href="https://leetcode.com/problems/car-pooling/" target="_blank">LC 1094</a>, <a href="https://leetcode.com/problems/employee-free-time/" target="_blank">LC 759</a></td>
</tr>
</tbody>
</table>
`
        },
        { name: 'Binary Search Patterns', imageUrl: 'photos/binarySearch.jpeg',
            content: `<div class="modal-header-image" style="background-image: url('photos/binarySearch.jpeg');"></div>
                <div class="modal-body">
                <h1>🔍 Binary Search Patterns</h1>

<hr>

<h2>✅ 1. Basic Binary Search (Standard Form)</h2>
<p><b>When to Use:</b> Array is sorted and you are searching for a specific value.</p>
<p><b>Approach:</b> Classic left-right pointers, check mid value, adjust search space.</p>

<pre><code class="language-java">
int left = 0, right = nums.length - 1;
while (left &lt;= right) {
    int mid = left + (right - left) / 2;
    if (nums[mid] == target) return mid;
    else if (nums[mid] &lt; target) left = mid + 1;
    else right = mid - 1;
}
return -1;
</code></pre>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> Standard search in sorted array</li>
</ul>

<hr>

<h2>✅ 2. Lower Bound / First Occurrence (Leftmost Position)</h2>
<p><b>When to Use:</b> Find first index ≥ target or insert position.</p>
<p><b>Approach:</b> Left-biased binary search: shrink right pointer when mid ≥ target.</p>

<pre><code class="language-java">
int left = 0, right = nums.length;
while (left &lt; right) {
    int mid = left + (right - left) / 2;
    if (nums[mid] &lt; target) left = mid + 1;
    else right = mid;
}
return left;
</code></pre>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> First occurrence of target</li>
  <li><input type="checkbox"> Insert position</li>
  <li><input type="checkbox"> Smallest number ≥ target</li>
</ul>

<hr>

<h2>✅ 3. Upper Bound / Last Occurrence (Rightmost Position)</h2>
<p><b>When to Use:</b> Find last index ≤ target.</p>
<p><b>Approach:</b> Right-biased binary search: move left pointer when mid ≤ target.</p>

<pre><code class="language-java">
int left = 0, right = nums.length;
while (left &lt; right) {
    int mid = left + (right - left) / 2;
    if (nums[mid] &lt;= target) left = mid + 1;
    else right = mid;
}
return left - 1;
</code></pre>

<hr>

<h2>✅ 4. Binary Search on Answer Space (Search in a Range)</h2>
<p><b>When to Use:</b> Searching for an optimal value (min/max) rather than a specific element.</p>
<p><b>Approach:</b> Define a condition <code>isValid(mid)</code>. Narrow the search space based on condition.</p>

<pre><code class="language-java">
int low = 0, high = maxValue;
while (low &lt; high) {
    int mid = low + (high - low) / 2;
    if (isValid(mid)) high = mid; // search for min
    else low = mid + 1;
}
return low;
</code></pre>

<p>📌 Example Problems:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/split-array-largest-sum/" target="_blank">LC 410. Split Array Largest Sum</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/koko-eating-bananas/" target="_blank">LC 875. Koko Eating Bananas</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/" target="_blank">LC 1011. Capacity To Ship Packages Within D Days</a></li>
</ul>

<hr>

<h2>✅ 5. Rotated Sorted Array (Modified Binary Search)</h2>
<p><b>When to Use:</b> Array is rotated or contains duplicates, normal binary search fails.</p>
<p><b>Approach:</b> Check which half is sorted, decide whether to search left or right based on target.</p>

<pre><code class="language-java">
int left = 0, right = nums.length - 1;
while (left &lt;= right) {
    int mid = left + (right - left) / 2;
    if (nums[mid] == target) return mid;
    if (nums[left] &lt;= nums[mid]) { // left sorted
        if (nums[left] &lt;= target &amp;&amp; target &lt; nums[mid]) right = mid - 1;
        else left = mid + 1;
    } else { // right sorted
        if (nums[mid] &lt; target &amp;&amp; target &lt;= nums[right]) left = mid + 1;
        else right = mid - 1;
    }
}
return -1;
</code></pre>

<hr>

<h2>📊 Summary Table — Binary Search Patterns</h2>
<table border="1" cellspacing="0" cellpadding="8">
<thead>
<tr>
  <th>Pattern</th>
  <th>When to Use</th>
  <th>Approach</th>
  <th>Example Problems</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Standard Search</td>
  <td>Search for element in sorted array</td>
  <td>Classic left-right pointers, check mid value</td>
  <td>Basic binary search</td>
</tr>
<tr>
  <td>Lower Bound</td>
  <td>First position ≥ target</td>
  <td>Left-biased BS, shrink right if mid ≥ target</td>
  <td>First occurrence, insert position</td>
</tr>
<tr>
  <td>Upper Bound</td>
  <td>Last position ≤ target</td>
  <td>Right-biased BS, move left if mid ≤ target</td>
  <td>Last occurrence</td>
</tr>
<tr>
  <td>Search in Answer Space</td>
  <td>Min/max value satisfying a condition</td>
  <td>Define isValid(mid), narrow low/high</td>
  <td><a href="https://leetcode.com/problems/split-array-largest-sum/" target="_blank">LC 410</a>, <a href="https://leetcode.com/problems/koko-eating-bananas/" target="_blank">LC 875</a></td>
</tr>
<tr>
  <td>Rotated Sorted Array</td>
  <td>Array is rotated or contains duplicates</td>
  <td>Check sorted half, search accordingly</td>
  <td>Search in rotated array</td>
</tr>
</tbody>
</table>
`
         },
        { name: 'Linked List Patterns', imageUrl: 'photos/linkedList.jpeg',
            content: `<div class="modal-header-image" style="background-image: url('photos/linkedList.jpeg');"></div>
                <div class="modal-body">

                <h1>🔗 Linked List Patterns</h1>

<hr>

<h2>1. Traversal of Linked List</h2>
<p><b>When to Use:</b> Iterating through nodes (printing, counting, searching)</p>
<p><b>Approach:</b> Use a pointer to iterate until <code>null</code></p>

<pre><code class="language-java">
void traverse(ListNode head) {
    while (head != null) {
        // process head.val
        head = head.next;
    }
}
</code></pre>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/middle-of-the-linked-list/" target="_blank">LC 876. Middle of the Linked List</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/" target="_blank">LC 1290. Convert Binary Number in a Linked List to Integer</a></li>
</ul>

<hr>

<h2>2. Reverse a Linked List (Entire List)</h2>
<p><b>When to Use:</b> Palindrome check, merging, or manipulation</p>
<p><b>Approach:</b> Iteratively reverse by changing next pointers</p>

<pre><code class="language-java">
ListNode reverse(ListNode head) {
    ListNode prev = null;
    while (head != null) {
        ListNode next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}
</code></pre>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/reverse-linked-list/" target="_blank">LC 206</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/palindrome-linked-list/" target="_blank">LC 234</a></li>
</ul>

<hr>

<h2>3. Reverse Between Two Indices</h2>
<p><b>When to Use:</b> Reverse sublist in-place between positions <code>left</code> and <code>right</code></p>

<pre><code class="language-java">
ListNode reverseBetween(ListNode head, int left, int right) {
    ListNode dummy = new ListNode(0);
    dummy.next = head;
    ListNode prev = dummy;

    for (int i = 1; i < left; i++) prev = prev.next;

    ListNode curr = prev.next;
    for (int i = 0; i < right - left; i++) {
        ListNode temp = curr.next;
        curr.next = temp.next;
        temp.next = prev.next;
        prev.next = temp;
    }
    return dummy.next;
}
</code></pre>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/reverse-linked-list-ii/" target="_blank">LC 92. Reverse Linked List II</a></li>
</ul>

<hr>

<h2>4. Cycle Detection</h2>
<p><b>When to Use:</b> Detect loops in linked list</p>

<pre><code class="language-java">
boolean hasCycle(ListNode head) {
    ListNode slow = head, fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) return true;
    }
    return false;
}
</code></pre>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/linked-list-cycle/" target="_blank">LC 141</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/linked-list-cycle-ii/" target="_blank">LC 142</a></li>
</ul>

<hr>

<h2>5. Find Middle Node</h2>
<p><b>When to Use:</b> Split list, palindrome check, binary operations</p>

<pre><code class="language-java">
ListNode middleNode(ListNode head) {
    ListNode slow = head, fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
</code></pre>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/middle-of-the-linked-list/" target="_blank">LC 876</a></li>
</ul>

<hr>

<h2>6. Remove N-th Node from End</h2>
<p><b>When to Use:</b> Delete node in one pass using two pointers</p>

<pre><code class="language-java">
ListNode removeNthFromEnd(ListNode head, int n) {
    ListNode dummy = new ListNode(0);
    dummy.next = head;
    ListNode first = dummy, second = dummy;

    for (int i = 0; i <= n; i++) first = first.next;

    while (first != null) {
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;
    return dummy.next;
}
</code></pre>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/remove-nth-node-from-end-of-list/" target="_blank">LC 19</a></li>
</ul>

<hr>

<h2>7. Merge Two Sorted Lists</h2>
<p><b>When to Use:</b> Merge sorted sequences, sorting related problems</p>

<pre><code class="language-java">
ListNode merge(ListNode l1, ListNode l2) {
    ListNode dummy = new ListNode(0);
    ListNode tail = dummy;

    while (l1 != null && l2 != null) {
        if (l1.val < l2.val) { tail.next = l1; l1 = l1.next; }
        else { tail.next = l2; l2 = l2.next; }
        tail = tail.next;
    }
    tail.next = (l1 != null) ? l1 : l2;
    return dummy.next;
}
</code></pre>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/merge-two-sorted-lists/" target="_blank">LC 21</a></li>
</ul>

<hr>

<h2>8. Reverse in K-Group</h2>
<p><b>When to Use:</b> Reverse list in chunks of size k</p>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/reverse-nodes-in-k-group/" target="_blank">LC 25</a></li>
</ul>

<hr>

<h2>📊 Linked List Patterns Summary Table</h2>
<table border="1" cellspacing="0" cellpadding="8">
<thead>
<tr>
  <th>Pattern</th>
  <th>Use Case</th>
  <th>Example Problems</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Traversal</td>
  <td>Printing, basic iteration</td>
  <td><a href="https://leetcode.com/problems/middle-of-the-linked-list/" target="_blank">LC 876</a></td>
</tr>
<tr>
  <td>Full Reversal</td>
  <td>Palindromes, list manipulation</td>
  <td><a href="https://leetcode.com/problems/reverse-linked-list/" target="_blank">LC 206</a>, <a href="https://leetcode.com/problems/palindrome-linked-list/" target="_blank">LC 234</a></td>
</tr>
<tr>
  <td>Reverse Sublist</td>
  <td>Modify a portion of the list</td>
  <td><a href="https://leetcode.com/problems/reverse-linked-list-ii/" target="_blank">LC 92</a></td>
</tr>
<tr>
  <td>Cycle Detection</td>
  <td>Loop finding, infinite path validation</td>
  <td><a href="https://leetcode.com/problems/linked-list-cycle/" target="_blank">LC 141</a>, <a href="https://leetcode.com/problems/linked-list-cycle-ii/" target="_blank">LC 142</a></td>
</tr>
<tr>
  <td>Find Middle Node</td>
  <td>Palindrome check, halve list</td>
  <td><a href="https://leetcode.com/problems/middle-of-the-linked-list/" target="_blank">LC 876</a></td>
</tr>
<tr>
  <td>Remove N-th From End</td>
  <td>One-pass deletion</td>
  <td><a href="https://leetcode.com/problems/remove-nth-node-from-end-of-list/" target="_blank">LC 19</a></td>
</tr>
<tr>
  <td>Merge Sorted Lists</td>
  <td>Sorting-related problems</td>
  <td><a href="https://leetcode.com/problems/merge-two-sorted-lists/" target="_blank">LC 21</a></td>
</tr>
<tr>
  <td>Reverse in K-Group</td>
  <td>Advanced chunk-based reversal</td>
  <td><a href="https://leetcode.com/problems/reverse-nodes-in-k-group/" target="_blank">LC 25</a></td>
</tr>
</tbody>
</table>
`
         },
        { name: 'Divide and Conquer', imageUrl: 'photos/divide&conqure.jpeg',
            content: `<div class="modal-header-image" style="background-image: url('photos/divide&conqure.jpeg');"></div>
                <div class="modal-body">

                <h1>⚔️ Divide & Conquer Patterns</h1>

<hr>

<h2>1. Binary Search Variants</h2>
<p><b>When to Use:</b> Searching in sorted arrays or answer space</p>
<p><b>Approach:</b> Repeatedly divide the search space in half, check mid element and move left/right</p>

<pre><code class="language-java">
int binarySearch(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) return mid;
        else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
</code></pre>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/binary-search/" target="_blank">LC 704. Binary Search</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/search-in-rotated-sorted-array/" target="_blank">LC 33. Search in Rotated Sorted Array</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/search-in-rotated-sorted-array-ii/" target="_blank">LC 81. Search in Rotated Sorted Array II</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/median-of-two-sorted-arrays/" target="_blank">LC 4. Median of Two Sorted Arrays</a></li>
</ul>

<hr>

<h2>2. Merge Sort & Variants</h2>
<p><b>When to Use:</b> Sorting arrays, counting inversions, or splitting arrays recursively</p>
<p><b>Approach:</b> Divide array into halves, sort each recursively, merge sorted halves</p>

<pre><code class="language-java">
void mergeSort(int[] arr, int l, int r) {
    if (l >= r) return;
    int mid = l + (r - l) / 2;
    mergeSort(arr, l, mid);
    mergeSort(arr, mid + 1, r);
    merge(arr, l, mid, r);
}

void merge(int[] arr, int l, int mid, int r) {
    int[] temp = new int[r - l + 1];
    int i = l, j = mid + 1, k = 0;
    while (i <= mid && j <= r) {
        if (arr[i] <= arr[j]) temp[k++] = arr[i++];
        else temp[k++] = arr[j++];
    }
    while (i <= mid) temp[k++] = arr[i++];
    while (j <= r) temp[k++] = arr[j++];
    for (int x = 0; x < temp.length; x++) arr[l + x] = temp[x];
}
</code></pre>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/sort-an-array/" target="_blank">LC 912. Sort an Array</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/count-of-smaller-numbers-after-self/" target="_blank">LC 315. Count of Smaller Numbers After Self</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/reverse-pairs/" target="_blank">LC 493. Reverse Pairs</a></li>
</ul>

<hr>

<h2>3. Quickselect / Quicksort</h2>
<p><b>When to Use:</b> Kth element problems, partially sorting arrays</p>
<p><b>Approach:</b> Partition array around a pivot, recurse into the side containing kth element</p>

<pre><code class="language-java">
int quickSelect(int[] nums, int left, int right, int k) {
    int pivot = partition(nums, left, right);
    if (pivot == k) return nums[pivot];
    else if (pivot < k) return quickSelect(nums, pivot + 1, right, k);
    else return quickSelect(nums, left, pivot - 1, k);
}

int partition(int[] nums, int left, int right) {
    int pivot = nums[right], i = left;
    for (int j = left; j < right; j++) {
        if (nums[j] <= pivot) {
            int temp = nums[i]; nums[i] = nums[j]; nums[j] = temp;
            i++;
        }
    }
    int temp = nums[i]; nums[i] = nums[right]; nums[right] = temp;
    return i;
}
</code></pre>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/kth-largest-element-in-an-array/" target="_blank">LC 215. Kth Largest Element in an Array</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/k-closest-points-to-origin/" target="_blank">LC 973. K Closest Points to Origin</a></li>
</ul>

<hr>

<h2>4. Divide & Conquer on Matrices</h2>
<p><b>When to Use:</b> Search or partition 2D matrices efficiently</p>
<p><b>Approach:</b> Treat 2D matrix as 1D array, binary search or split recursively</p>

<pre><code class="language-java">
boolean searchMatrix(int[][] matrix, int target) {
    int m = matrix.length, n = matrix[0].length;
    int left = 0, right = m * n - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        int val = matrix[mid / n][mid % n];
        if (val == target) return true;
        else if (val < target) left = mid + 1;
        else right = mid - 1;
    }
    return false;
}
</code></pre>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/search-a-2d-matrix-ii/" target="_blank">LC 240. Search a 2D Matrix II</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/split-array-largest-sum/" target="_blank">LC 410. Split Array Largest Sum</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/the-skyline-problem/" target="_blank">LC 218. The Skyline Problem</a></li>
</ul>

<hr>

<h2>5. Classic Recursive Divide & Conquer</h2>
<p><b>When to Use:</b> Expression evaluation, merging multiple sequences, majority problems</p>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/different-ways-to-add-parentheses/" target="_blank">LC 241. Different Ways to Add Parentheses</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/majority-element/" target="_blank">LC 169. Majority Element</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/merge-k-sorted-lists/" target="_blank">LC 23. Merge k Sorted Lists</a></li>
</ul>

<hr>

<h2>📊 Divide & Conquer Summary Table</h2>
<table border="1" cellspacing="0" cellpadding="8">
<thead>
<tr>
  <th>Pattern</th>
  <th>Use Case</th>
  <th>Example Problems</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Binary Search</td>
  <td>Search in sorted structures, parametric search</td>
  <td>
    <a href="https://leetcode.com/problems/binary-search/" target="_blank">LC 704</a>, 
    <a href="https://leetcode.com/problems/search-in-rotated-sorted-array/" target="_blank">LC 33</a>, 
    <a href="https://leetcode.com/problems/median-of-two-sorted-arrays/" target="_blank">LC 4</a>
  </td>
</tr>
<tr>
  <td>Merge Sort</td>
  <td>Sorting, counting inversions</td>
  <td>
    <a href="https://leetcode.com/problems/sort-an-array/" target="_blank">LC 912</a>, 
    <a href="https://leetcode.com/problems/reverse-pairs/" target="_blank">LC 493</a>, 
    <a href="https://leetcode.com/problems/count-of-smaller-numbers-after-self/" target="_blank">LC 315</a>
  </td>
</tr>
<tr>
  <td>Quickselect</td>
  <td>Kth element problems</td>
  <td>
    <a href="https://leetcode.com/problems/kth-largest-element-in-an-array/" target="_blank">LC 215</a>, 
    <a href="https://leetcode.com/problems/k-closest-points-to-origin/" target="_blank">LC 973</a>
  </td>
</tr>
<tr>
  <td>Matrix D&C</td>
  <td>Search in matrix, partitioning</td>
  <td>
    <a href="https://leetcode.com/problems/search-a-2d-matrix-ii/" target="_blank">LC 240</a>, 
    <a href="https://leetcode.com/problems/split-array-largest-sum/" target="_blank">LC 410</a>
  </td>
</tr>
<tr>
  <td>Recursion-based D&C</td>
  <td>Expression problems, merge problems</td>
  <td>
    <a href="https://leetcode.com/problems/different-ways-to-add-parentheses/" target="_blank">LC 241</a>, 
    <a href="https://leetcode.com/problems/merge-k-sorted-lists/" target="_blank">LC 23</a>
  </td>
</tr>
</tbody>
</table>
`
         },
        { name: 'Binary Tree Traversal', imageUrl: 'photos/tree.jpeg',
            content: `<div class="modal-header-image" style="background-image: url('photos/tree.jpeg');"></div>
                <div class="modal-body">

                <h1>🌲 Binary Tree Traversal Patterns</h1>

<hr>

<h2>1. Preorder Traversal (Root → Left → Right)</h2>
<p><b>When to Use:</b> Copying a tree, serializing a tree</p>
<p><b>Approach:</b> Visit root first, then left subtree, then right subtree</p>

<pre><code class="language-java">
void preorder(TreeNode root) {
    if (root == null) return;
    System.out.print(root.val + " ");
    preorder(root.left);
    preorder(root.right);
}
</code></pre>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/binary-tree-preorder-traversal/" target="_blank">LC 144. Preorder Traversal</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/" target="_blank">LC 105. Construct from Preorder & Inorder</a></li>
</ul>

<hr>

<h2>2. Inorder Traversal (Left → Root → Right)</h2>
<p><b>When to Use:</b> Validate BST, convert tree to sorted array</p>
<p><b>Approach:</b> Visit left subtree, root, then right subtree</p>

<pre><code class="language-java">
void inorder(TreeNode root) {
    if (root == null) return;
    inorder(root.left);
    System.out.print(root.val + " ");
    inorder(root.right);
}
</code></pre>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/binary-tree-inorder-traversal/" target="_blank">LC 94. Inorder Traversal</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/" target="_blank">LC 106. Construct from Inorder & Postorder</a></li>
</ul>

<hr>

<h2>3. Postorder Traversal (Left → Right → Root)</h2>
<p><b>When to Use:</b> Deleting a tree, evaluating expression trees</p>
<p><b>Approach:</b> Visit left and right subtrees first, then root</p>

<pre><code class="language-java">
void postorder(TreeNode root) {
    if (root == null) return;
    postorder(root.left);
    postorder(root.right);
    System.out.print(root.val + " ");
}
</code></pre>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/binary-tree-postorder-traversal/" target="_blank">LC 145. Postorder Traversal</a></li>
</ul>

<hr>

<h2>4. BFS / Level Order Traversal</h2>
<p><b>When to Use:</b> Visit nodes level by level</p>
<p><b>Approach:</b> Use a queue to traverse each level of the tree</p>

<pre><code class="language-java">
void bfs(TreeNode root) {
    if (root == null) return;
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    while (!queue.isEmpty()) {
        TreeNode current = queue.poll();
        System.out.print(current.val + " ");
        if (current.left != null) queue.offer(current.left);
        if (current.right != null) queue.offer(current.right);
    }
}
</code></pre>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/binary-tree-level-order-traversal/" target="_blank">LC 102. Level Order Traversal</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/" target="_blank">LC 103. Zigzag Level Order</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/binary-tree-level-order-traversal-ii/" target="_blank">LC 107. Level Order Traversal II</a></li>
</ul>

<hr>

<h2>📊 Binary Tree Traversal Summary Table</h2>
<table border="1" cellspacing="0" cellpadding="8">
<thead>
<tr>
  <th>Traversal</th>
  <th>Use Case</th>
  <th>Example Problems</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Preorder</td>
  <td>Copy tree, serialize</td>
  <td>
    <a href="https://leetcode.com/problems/binary-tree-preorder-traversal/" target="_blank">LC 144</a>, 
    <a href="https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/" target="_blank">LC 105</a>
  </td>
</tr>
<tr>
  <td>Inorder</td>
  <td>Validate BST, sorted array</td>
  <td>
    <a href="https://leetcode.com/problems/binary-tree-inorder-traversal/" target="_blank">LC 94</a>, 
    <a href="https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/" target="_blank">LC 106</a>
  </td>
</tr>
<tr>
  <td>Postorder</td>
  <td>Delete tree, expression evaluation</td>
  <td>
    <a href="https://leetcode.com/problems/binary-tree-postorder-traversal/" target="_blank">LC 145</a>
  </td>
</tr>
<tr>
  <td>BFS / Level Order</td>
  <td>Level-wise traversal</td>
  <td>
    <a href="https://leetcode.com/problems/binary-tree-level-order-traversal/" target="_blank">LC 102</a>, 
    <a href="https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/" target="_blank">LC 103</a>, 
    <a href="https://leetcode.com/problems/binary-tree-level-order-traversal-ii/" target="_blank">LC 107</a>
  </td>
</tr>
</tbody>
</table>
`
        },
        { name: 'Breadth First Search', imageUrl: 'photos/bfs.jpeg',
            content: `<div class="modal-header-image" style="background-image: url('photos/bfs.jpeg');"></div>
                <div class="modal-body">
    

            <h1>🌐 Breadth-First Search (BFS) Patterns</h1>

<hr>

<h2>1. Classic BFS (Graph / State Space)</h2>
<p><b>When to Use:</b> Traverse all nodes reachable from a source</p>
<p><b>Approach:</b> Use a queue and visited set to track visited nodes</p>

<pre><code class="language-java">
import java.util.*;

public class BFSExample {
    public void bfs(Map<Integer, List<Integer>> graph, int start) {
        Queue<Integer> queue = new LinkedList<>();
        Set<Integer> visited = new HashSet<>();
        queue.offer(start);
        visited.add(start);

        while (!queue.isEmpty()) {
            int current = queue.poll();
            System.out.println("Visited: " + current);

            for (int neighbor : graph.getOrDefault(current, new ArrayList<>())) {
                if (!visited.contains(neighbor)) {
                    visited.add(neighbor);
                    queue.offer(neighbor);
                }
            }
        }
    }
}
</code></pre>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/number-of-islands/" target="_blank">LC 200. Number of Islands</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/rotting-oranges/" target="_blank">LC 994. Rotting Oranges</a></li>
</ul>

<hr>

<h2>2. BFS on 2D Grids</h2>
<p><b>When to Use:</b> Grid traversal, shortest path, connected components</p>

<pre><code class="language-java">
public class GridBFS {
    int[][] directions = {{0,1}, {1,0}, {0,-1}, {-1,0}}; // Right, Down, Left, Up

    public void bfsGrid(int[][] grid, int startX, int startY) {
        int rows = grid.length, cols = grid[0].length;
        boolean[][] visited = new boolean[rows][cols];
        Queue<int[]> queue = new LinkedList<>();
        queue.offer(new int[]{startX, startY});
        visited[startX][startY] = true;

        while (!queue.isEmpty()) {
            int[] current = queue.poll();
            int x = current[0], y = current[1];
            System.out.println("Visiting: " + x + ", " + y);

            for (int[] dir : directions) {
                int newX = x + dir[0], newY = y + dir[1];
                if (newX >= 0 && newY >= 0 && newX < rows && newY < cols &&
                    !visited[newX][newY] && grid[newX][newY] == 1) {
                    visited[newX][newY] = true;
                    queue.offer(new int[]{newX, newY});
                }
            }
        }
    }
}
</code></pre>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/01-matrix/" target="_blank">LC 542. 01 Matrix</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/walls-and-gates/" target="_blank">LC 286. Walls and Gates</a></li>
</ul>

<hr>

<h2>3. Level Order Traversal (Trees)</h2>
<p><b>When to Use:</b> Traverse tree level by level</p>

<pre><code class="language-java">
public class TreeBFS {
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        if (root == null) return result;
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);

        while (!queue.isEmpty()) {
            int size = queue.size();
            List<Integer> level = new ArrayList<>();
            for (int i = 0; i < size; i++) {
                TreeNode current = queue.poll();
                level.add(current.val);
                if (current.left != null) queue.offer(current.left);
                if (current.right != null) queue.offer(current.right);
            }
            result.add(level);
        }
        return result;
    }

    static class TreeNode {
        int val;
        TreeNode left, right;
        TreeNode(int val) { this.val = val; }
    }
}
</code></pre>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/binary-tree-level-order-traversal/" target="_blank">LC 102</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/" target="_blank">LC 103</a></li>
</ul>

<hr>

<h2>4. Weighted BFS / Dijkstra's Algorithm</h2>
<p><b>When to Use:</b> BFS with weighted edges (shortest path with non-uniform costs)</p>

<pre><code class="language-java">
import java.util.*;

public class WeightedBFS {
    public int dijkstra(Map<Integer, List<int[]>> graph, int start, int target, int n) {
        int[] dist = new int[n + 1];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[start] = 0;
        PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[0]));
        pq.offer(new int[]{0, start});

        while (!pq.isEmpty()) {
            int[] current = pq.poll();
            int cost = current[0], node = current[1];
            if (node == target) return cost;

            for (int[] neighbor : graph.getOrDefault(node, new ArrayList<>())) {
                int nextNode = neighbor[0], weight = neighbor[1];
                int newDist = cost + weight;
                if (newDist < dist[nextNode]) {
                    dist[nextNode] = newDist;
                    pq.offer(new int[]{newDist, nextNode});
                }
            }
        }
        return -1;
    }
}
</code></pre>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/path-with-minimum-effort/" target="_blank">LC 1631. Path With Minimum Effort</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/path-with-maximum-probability/" target="_blank">LC 1514. Path With Maximum Probability</a></li>
</ul>

<hr>

<h2>📊 BFS Patterns Summary Table</h2>
<table border="1" cellspacing="0" cellpadding="8">
<thead>
<tr>
  <th>Pattern</th>
  <th>Key Concept</th>
  <th>Example Problems</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Classic BFS</td>
  <td>Traverse all reachable nodes</td>
  <td>
    <a href="https://leetcode.com/problems/number-of-islands/" target="_blank">LC 200</a>,
    <a href="https://leetcode.com/problems/rotting-oranges/" target="_blank">LC 994</a>
  </td>
</tr>
<tr>
  <td>Shortest Path (Unweighted)</td>
  <td>Level-order traversal for distance</td>
  <td>
    <a href="https://leetcode.com/problems/shortest-path-in-binary-matrix/" target="_blank">LC 1091</a>,
    <a href="https://leetcode.com/problems/open-the-lock/" target="_blank">LC 752</a>
  </td>
</tr>
<tr>
  <td>Grid-Based BFS</td>
  <td>2D traversal with directions</td>
  <td>
    <a href="https://leetcode.com/problems/01-matrix/" target="_blank">LC 542</a>,
    <a href="https://leetcode.com/problems/walls-and-gates/" target="_blank">LC 286</a>
  </td>
</tr>
<tr>
  <td>Multi-Source BFS</td>
  <td>Start BFS from multiple sources</td>
  <td>
    <a href="https://leetcode.com/problems/rotting-oranges/" target="_blank">LC 994</a>,
    <a href="https://leetcode.com/problems/01-matrix/" target="_blank">LC 542</a>
  </td>
</tr>
<tr>
  <td>Bi-Directional BFS</td>
  <td>BFS from both ends for shortest path</td>
  <td>
    <a href="https://leetcode.com/problems/word-ladder/" target="_blank">LC 127</a>
  </td>
</tr>
<tr>
  <td>State Space BFS</td>
  <td>Model transformations as graph nodes</td>
  <td>
    <a href="https://leetcode.com/problems/sliding-puzzle/" target="_blank">LC 773</a>,
    <a href="https://leetcode.com/problems/open-the-lock/" target="_blank">LC 752</a>
  </td>
</tr>
<tr>
  <td>Tree Level Order</td>
  <td>BFS in binary trees</td>
  <td>
    <a href="https://leetcode.com/problems/binary-tree-level-order-traversal/" target="_blank">LC 102</a>,
    <a href="https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/" target="_blank">LC 103</a>
  </td>
</tr>
<tr>
  <td>Cycle Detection (BFS)</td>
  <td>Track parent to detect cycles</td>
  <td>
    <a href="https://leetcode.com/problems/is-graph-bipartite/" target="_blank">LC 785</a>
  </td>
</tr>
<tr>
  <td>Topological Sort (Kahn’s)</td>
  <td>In-degree + queue processing for DAGs</td>
  <td>
    <a href="https://leetcode.com/problems/course-schedule/" target="_blank">LC 207</a>,
    <a href="https://leetcode.com/problems/course-schedule-ii/" target="_blank">LC 210</a>
  </td>
</tr>
<tr>
  <td>Weighted BFS / Dijkstra</td>
  <td>Priority queue for shortest path with costs</td>
  <td>
    <a href="https://leetcode.com/problems/path-with-minimum-effort/" target="_blank">LC 1631</a>,
    <a href="https://leetcode.com/problems/path-with-maximum-probability/" target="_blank">LC 1514</a>
  </td>
</tr>
</tbody>
</table>
`
         },
        { name: 'Depth First Search', imageUrl: 'photos/dfs.jpeg' ,
            content: `<div class="modal-header-image" style="background-image: url('photos/dfs.jpeg');"></div>
                <div class="modal-body">

                <h1>🌲 Depth-First Search (DFS) Patterns</h1>

<hr>

<h2>1. DFS on Trees</h2>
<p><b>When to Use:</b> Traverse tree structures recursively (no cycles)</p>
<p><b>Approach:</b> Preorder / Inorder / Postorder traversals using recursion</p>

<pre><code class="language-java">
void dfs(TreeNode node) {
    if (node == null) return;
    dfs(node.left);
    dfs(node.right);
}
</code></pre>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/maximum-depth-of-binary-tree/" target="_blank">LC 104. Maximum Depth of Binary Tree</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/path-sum/" target="_blank">LC 112. Path Sum</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/invert-binary-tree/" target="_blank">LC 226. Invert Binary Tree</a></li>
</ul>

<hr>

<h2>2. DFS on Graphs (with visited set)</h2>
<p><b>When to Use:</b> Graph traversal where cycles may exist</p>

<pre><code class="language-java">
void dfs(int node, Set<Integer> visited, Map<Integer, List<Integer>> graph) {
    if (visited.contains(node)) return;
    visited.add(node);
    for (int neighbor : graph.get(node)) {
        dfs(neighbor, visited, graph);
    }
}
</code></pre>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/number-of-islands/" target="_blank">LC 200. Number of Islands</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/number-of-distinct-islands/" target="_blank">LC 694. Number of Distinct Islands</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/clone-graph/" target="_blank">LC 133. Clone Graph</a></li>
</ul>

<hr>

<h2>3. DFS with Backtracking (Permutations / Combinations)</h2>
<p><b>When to Use:</b> Explore all possible options and undo (backtrack) after trying</p>

<pre><code class="language-java">
void dfs(List<Integer> path, int[] nums) {
    if (path.size() == nums.length) {
        result.add(new ArrayList<>(path));
        return;
    }
    for (int i = 0; i < nums.length; i++) {
        if (used[i]) continue;
        used[i] = true;
        path.add(nums[i]);
        dfs(path, nums);
        path.remove(path.size() - 1);
        used[i] = false;
    }
}
</code></pre>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/permutations/" target="_blank">LC 46. Permutations</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/combination-sum/" target="_blank">LC 39. Combination Sum</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/n-queens/" target="_blank">LC 51. N-Queens</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/combinations/" target="_blank">LC 77. Combinations</a></li>
</ul>

<hr>

<h2>4. DFS on 2D Grids (Flood Fill / Maze)</h2>
<p><b>When to Use:</b> Each cell as a node, move in 4/8 directions</p>

<pre><code class="language-java">
void dfs(char[][] grid, int r, int c) {
    if (outOfBounds || grid[r][c] == '0') return;
    grid[r][c] = '0'; // mark visited
    for (int[] dir : dirs) {
        dfs(grid, r + dir[0], c + dir[1]);
    }
}
</code></pre>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/number-of-islands/" target="_blank">LC 200. Number of Islands</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/max-area-of-island/" target="_blank">LC 695. Max Area of Island</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/flood-fill/" target="_blank">LC 733. Flood Fill</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/word-search/" target="_blank">LC 79. Word Search</a></li>
</ul>

<hr>

<h2>5. DFS + Memoization (Graph DP)</h2>
<p><b>When to Use:</b> Repeated subproblems in DAGs</p>

<pre><code class="language-java">
int dfs(int node, Map<Integer, List<Integer>> graph, Map<Integer, Integer> memo) {
    if (memo.containsKey(node)) return memo.get(node);
    int result = 0;
    for (int nei : graph.get(node)) {
        result = Math.max(result, dfs(nei, graph, memo));
    }
    memo.put(node, result + 1);
    return result + 1;
}
</code></pre>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/longest-increasing-path-in-a-matrix/" target="_blank">LC 329. Longest Increasing Path in a Matrix</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/cheapest-flights-within-k-stops/" target="_blank">LC 787. Cheapest Flights Within K Stops</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/word-break/" target="_blank">LC 139. Word Break</a></li>
</ul>

<hr>

<h2>6. Cycle Detection with DFS</h2>
<p><b>When to Use:</b> Topological sorting, graph validation</p>

<pre><code class="language-java">
boolean dfs(int node, Set<Integer> visiting, Set<Integer> visited) {
    if (visiting.contains(node)) return true;
    if (visited.contains(node)) return false;

    visiting.add(node);
    for (int nei : graph.get(node)) {
        if (dfs(nei, visiting, visited)) return true;
    }
    visiting.remove(node);
    visited.add(node);
    return false;
}
</code></pre>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/course-schedule/" target="_blank">LC 207. Course Schedule</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/find-eventual-safe-states/" target="_blank">LC 802. Find Eventual Safe States</a></li>
</ul>

<hr>

<h2>7. DFS for Path Finding / Counting Paths</h2>
<p><b>When to Use:</b> Find all paths from source to target or count paths</p>

<pre><code class="language-java">
void dfs(int node, List<Integer> path) {
    if (node == target) {
        result.add(new ArrayList<>(path));
        return;
    }
    for (int nei : graph.get(node)) {
        path.add(nei);
        dfs(nei, path);
        path.remove(path.size() - 1);
    }
}
</code></pre>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/all-paths-from-source-to-target/" target="_blank">LC 797. All Paths From Source to Target</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/binary-tree-paths/" target="_blank">LC 257. Binary Tree Paths</a></li>
</ul>

<hr>

<h2>📊 DFS Patterns Summary Table</h2>
<table border="1" cellspacing="0" cellpadding="8">
<thead>
<tr>
  <th>Pattern</th>
  <th>Use Cases</th>
  <th>Example Problems</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Tree DFS</td>
  <td>Tree traversal, path sums</td>
  <td>
    <a href="https://leetcode.com/problems/maximum-depth-of-binary-tree/" target="_blank">LC 104</a>,
    <a href="https://leetcode.com/problems/path-sum/" target="_blank">LC 112</a>
  </td>
</tr>
<tr>
  <td>Graph DFS</td>
  <td>Cycle detection, component counting</td>
  <td>
    <a href="https://leetcode.com/problems/number-of-islands/" target="_blank">LC 200</a>,
    <a href="https://leetcode.com/problems/clone-graph/" target="_blank">LC 133</a>
  </td>
</tr>
<tr>
  <td>DFS + Backtracking</td>
  <td>Permutations, combinations</td>
  <td>
    <a href="https://leetcode.com/problems/permutations/" target="_blank">LC 46</a>,
    <a href="https://leetcode.com/problems/n-queens/" target="_blank">LC 51</a>
  </td>
</tr>
<tr>
  <td>Grid DFS</td>
  <td>Islands, flood fill, maze problems</td>
  <td>
    <a href="https://leetcode.com/problems/number-of-islands/" target="_blank">LC 200</a>,
    <a href="https://leetcode.com/problems/word-search/" target="_blank">LC 79</a>
  </td>
</tr>
<tr>
  <td>DFS + Memoization</td>
  <td>Graph DP, longest paths</td>
  <td>
    <a href="https://leetcode.com/problems/longest-increasing-path-in-a-matrix/" target="_blank">LC 329</a>,
    <a href="https://leetcode.com/problems/word-break/" target="_blank">LC 139</a>
  </td>
</tr>
<tr>
  <td>Cycle Detection</td>
  <td>Topological sorting, deadlocks</td>
  <td>
    <a href="https://leetcode.com/problems/course-schedule/" target="_blank">LC 207</a>,
    <a href="https://leetcode.com/problems/find-eventual-safe-states/" target="_blank">LC 802</a>
  </td>
</tr>
<tr>
  <td>Path Finding</td>
  <td>All paths, finding route</td>
  <td>
    <a href="https://leetcode.com/problems/all-paths-from-source-to-target/" target="_blank">LC 797</a>,
    <a href="https://leetcode.com/problems/binary-tree-paths/" target="_blank">LC 257</a>
  </td>
</tr>
</tbody>
</table>
`
        },
        { name: 'Backtracking', imageUrl: 'photos/backtracking.jpeg' ,
            content: `<div class="modal-header-image" style="background-image: url('photos/backtracking.jpeg');"></div>
                <div class="modal-body">
                <h1>🎲 Backtracking Patterns</h1>

<hr>

<h2>1. Universal Backtracking Template</h2>
<p><b>When to Use:</b> Explore all possible options incrementally and backtrack if invalid</p>

<pre><code class="language-java">
void backtrack(State state) {
    if (isGoal(state)) {
        addSolution(state);
        return;
    }

    for (choice in possibleChoices(state)) {
        if (isValid(choice, state)) {
            makeChoice(choice, state);
            backtrack(state);
            undoChoice(choice, state); // backtrack
        }
    }
}
</code></pre>

<hr>

<h2>2. Subsets / Pick-or-Not-Pick</h2>
<p><b>Key Idea:</b> For each element, decide whether to pick or skip</p>

<pre><code class="language-java">
void backtrack(int start, List<Integer> path) {
    result.add(new ArrayList<>(path));

    for (int i = start; i < nums.length; i++) {
        path.add(nums[i]);          
        backtrack(i + 1, path);     
        path.remove(path.size() - 1); 
    }
}
</code></pre>

<hr>

<h2>3. Permutations</h2>
<p><b>Key Idea:</b> Try every unused element at each position using a boolean[] used array</p>

<pre><code class="language-java">
void backtrack(List<Integer> path, boolean[] used) {
    if (path.size() == nums.length) {
        result.add(new ArrayList<>(path));
        return;
    }

    for (int i = 0; i < nums.length; i++) {
        if (used[i]) continue;

        used[i] = true;
        path.add(nums[i]);
        backtrack(path, used);
        path.remove(path.size() - 1);
        used[i] = false;
    }
}
</code></pre>

<hr>

<h2>4. Combinations (k out of n)</h2>
<p><b>Key Idea:</b> Build combinations of length k using start index</p>

<pre><code class="language-java">
void backtrack(int start, List<Integer> path) {
    if (path.size() == k) {
        result.add(new ArrayList<>(path));
        return;
    }

    for (int i = start; i <= n; i++) {
        path.add(i);
        backtrack(i + 1, path);
        path.remove(path.size() - 1);
    }
}
</code></pre>

<hr>

<h2>5. Permutations with Duplicates</h2>
<p><b>Key Idea:</b> Sort array and skip duplicates</p>

<pre><code class="language-java">
Arrays.sort(nums);

void backtrack(List<Integer> path, boolean[] used) {
    if (path.size() == nums.length) {
        result.add(new ArrayList<>(path));
        return;
    }

    for (int i = 0; i < nums.length; i++) {
        if (used[i]) continue;
        if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) continue;

        used[i] = true;
        path.add(nums[i]);
        backtrack(path, used);
        path.remove(path.size() - 1);
        used[i] = false;
    }
}
</code></pre>

<hr>

<h2>6. Palindromic Partitioning</h2>
<p><b>Key Idea:</b> Recurse on all substrings that are palindromes</p>

<pre><code class="language-java">
void backtrack(int start, List<String> path) {
    if (start == s.length()) {
        result.add(new ArrayList<>(path));
        return;
    }

    for (int end = start + 1; end <= s.length(); end++) {
        String prefix = s.substring(start, end);
        if (isPalindrome(prefix)) {
            path.add(prefix);
            backtrack(end, path);
            path.remove(path.size() - 1);
        }
    }
}
</code></pre>

<hr>

<h2>7. N-Queens / Sudoku / Grid Search</h2>
<p><b>Key Idea:</b> Try placing a valid value, recurse, then remove it</p>

<pre><code class="language-java">
void backtrack(int row) {
    if (row == n) {
        result.add(construct(board));
        return;
    }

    for (int col = 0; col < n; col++) {
        if (isValid(row, col, board)) {
            board[row][col] = 'Q';
            backtrack(row + 1);
            board[row][col] = '.'; // backtrack
        }
    }
}
</code></pre>

<hr>

<h2>8. DFS with Backtracking (Graph Path Search)</h2>
<p><b>Key Idea:</b> Visit nodes recursively and backtrack after each neighbor</p>

<pre><code class="language-java">
void dfs(int node, List<Integer> path) {
    if (node == target) {
        result.add(new ArrayList<>(path));
        return;
    }

    for (int neighbor : graph[node]) {
        path.add(neighbor);
        dfs(neighbor, path);
        path.remove(path.size() - 1); // backtrack
    }
}
</code></pre>

<hr>

<h2>📊 Backtracking Summary Table</h2>
<table border="1" cellspacing="0" cellpadding="8">
<thead>
<tr>
  <th>Pattern</th>
  <th>Use Case</th>
  <th>Example Problems</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Subsets / Pick-or-Not-Pick</td>
  <td>Generate all subsets, combination sum</td>
  <td><a href="https://leetcode.com/problems/subsets/" target="_blank">LC 78</a></td>
</tr>
<tr>
  <td>Permutations</td>
  <td>All arrangements of elements</td>
  <td><a href="https://leetcode.com/problems/permutations/" target="_blank">LC 46</a></td>
</tr>
<tr>
  <td>Combinations (k out of n)</td>
  <td>All combinations of length k</td>
  <td><a href="https://leetcode.com/problems/combinations/" target="_blank">LC 77</a></td>
</tr>
<tr>
  <td>Permutations with Duplicates</td>
  <td>Handle repeated elements in permutations</td>
  <td><a href="https://leetcode.com/problems/permutations-ii/" target="_blank">LC 47</a></td>
</tr>
<tr>
  <td>Palindrome Partitioning</td>
  <td>Partition string into palindromic substrings</td>
  <td><a href="https://leetcode.com/problems/palindrome-partitioning/" target="_blank">LC 131</a></td>
</tr>
<tr>
  <td>N-Queens / Sudoku / Grid Search</td>
  <td>Constraint-based board/grid search</td>
  <td><a href="https://leetcode.com/problems/n-queens/" target="_blank">LC 51</a>, <a href="https://leetcode.com/problems/sudoku-solver/" target="_blank">LC 37</a></td>
</tr>
<tr>
  <td>DFS Backtracking on Graphs</td>
  <td>All paths from source to target</td>
  <td><a href="https://leetcode.com/problems/all-paths-from-source-to-target/" target="_blank">LC 797</a></td>
</tr>
</tbody>
</table>
`
        },
        { name: 'Dynamic Programming', imageUrl: 'photos/DP.jpeg' ,
         content: `<div class="modal-header-image" style="background-image: url('photos/DP.jpeg');"></div>
                <div class="modal-body"></div>}
                <h1>📊 Dynamic Programming (DP) Patterns</h1>
<hr>

<h2>1️⃣ 0/1 Knapsack & Variants</h2>
<p><b>When to Use:</b> Choosing items under capacity/sum constraints; "Pick/Not Pick" decisions</p>
<p><b>How to Approach:</b></p>
<ul>
  <li>Define subproblem: dp[i][w] = max value using first i items with capacity w</li>
  <li>Decide whether to pick or skip each item</li>
  <li>Memoize results (top-down) or tabulate (bottom-up)</li>
</ul>

<pre><code class="language-java">
// 0/1 Knapsack
int knapSack(int W, int[] wt, int[] val, int n) {
    int[][] dp = new int[n+1][W+1];
    for (int i = 1; i <= n; i++) {
        for (int w = 1; w <= W; w++) {
            if (wt[i-1] <= w) {
                dp[i][w] = Math.max(val[i-1] + dp[i-1][w-wt[i-1]], dp[i-1][w]);
            } else {
                dp[i][w] = dp[i-1][w];
            }
        }
    }
    return dp[n][W];
}
</code></pre>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/partition-equal-subset-sum/" target="_blank">LC 416. Partition Equal Subset Sum</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/target-sum/" target="_blank">LC 494. Target Sum</a></li>
</ul>
<hr>

<h2>2️⃣ Longest Common Subsequence (LCS) & Variants</h2>
<p><b>When to Use:</b> Sequence alignment, edit distance, comparing strings/subsequences</p>
<p><b>How to Approach:</b></p>
<ul>
  <li>Define dp[i][j] = LCS of first i chars of s1 and first j chars of s2</li>
  <li>If chars match → take 1 + dp[i-1][j-1], else max(dp[i-1][j], dp[i][j-1])</li>
</ul>

<pre><code class="language-java">
// LCS
int LCS(String s1, String s2) {
    int n = s1.length(), m = s2.length();
    int[][] dp = new int[n+1][m+1];
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            if (s1.charAt(i-1) == s2.charAt(j-1))
                dp[i][j] = 1 + dp[i-1][j-1];
            else
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
        }
    }
    return dp[n][m];
}
</code></pre>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/longest-common-subsequence/" target="_blank">LC 1143. Longest Common Subsequence</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/edit-distance/" target="_blank">LC 72. Edit Distance</a></li>
</ul>
<hr>

<h2>3️⃣ Matrix Chain Multiplication (Partition DP)</h2>
<p><b>When to Use:</b> Optimal splitting/merging problems, interval DP</p>
<p><b>How to Approach:</b></p>
<ul>
  <li>Define subproblem: dp[i][j] = min cost to multiply matrices i..j</li>
  <li>Try splitting at every index k and combine results</li>
  <li>Use memoization or tabulation</li>
</ul>

<pre><code class="language-java">
// MCM Pattern
int solve(int i, int j, int[] arr, int[][] dp) {
    if (i == j) return 0;
    if (dp[i][j] != -1) return dp[i][j];
    int min = Integer.MAX_VALUE;
    for (int k = i; k < j; k++) {
        int cost = arr[i-1]*arr[k]*arr[j] + solve(i, k, arr, dp) + solve(k+1, j, arr, dp);
        min = Math.min(min, cost);
    }
    return dp[i][j] = min;
}
</code></pre>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/burst-balloons/" target="_blank">LC 312. Burst Balloons</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/minimum-cost-to-cut-a-stick/" target="_blank">LC 1547. Minimum Cost to Cut a Stick</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/minimum-cost-to-merge-stones/" target="_blank">LC 1000. Minimum Cost to Merge Stones</a></li>
</ul>
<hr>

<h2>4️⃣ DP on Subsequences (Pick/Not Pick)</h2>
<p><b>When to Use:</b> Subset sums, counting subsequences, coin change</p>
<p><b>How to Approach:</b></p>
<ul>
  <li>Define dp[i][t] = # ways to reach target t using first i elements</li>
  <li>Decide pick or not pick current element</li>
</ul>

<pre><code class="language-java">
int countSubsets(int[] nums, int target) {
    int n = nums.length;
    int[][] dp = new int[n+1][target+1];
    dp[0][0] = 1;
    for (int i = 1; i <= n; i++) {
        for (int t = 0; t <= target; t++) {
            dp[i][t] = dp[i-1][t];
            if (t >= nums[i-1])
                dp[i][t] += dp[i-1][t-nums[i-1]];
        }
    }
    return dp[n][target];
}
</code></pre>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/coin-change-2/" target="_blank">LC 518. Coin Change II</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/target-sum/" target="_blank">LC 494. Target Sum</a></li>
</ul>
<hr>

<h2>5️⃣ DP on Grids</h2>
<p><b>When to Use:</b> Path counting, min/max cost path, obstacle grids</p>
<p><b>How to Approach:</b></p>
<ul>
  <li>Define dp[i][j] = #paths or min-cost to reach cell (i,j)</li>
  <li>Use transition from neighboring cells (top, left)</li>
</ul>

<pre><code class="language-java">
// Unique Paths
int uniquePaths(int m, int n) {
    int[][] dp = new int[m][n];
    for (int i = 0; i < m; i++) dp[i][0] = 1;
    for (int j = 0; j < n; j++) dp[0][j] = 1;
    for (int i = 1; i < m; i++) {
        for (int j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    return dp[m-1][n-1];
}
</code></pre>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/unique-paths/" target="_blank">LC 62. Unique Paths</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/minimum-path-sum/" target="_blank">LC 64. Minimum Path Sum</a></li>
</ul>
<hr>

<h2>6️⃣ Game Theory DP</h2>
<p><b>When to Use:</b> Turn-based games, optimal strategies (Alice vs Bob)</p>
<p><b>How to Approach:</b></p>
<ul>
  <li>Define dp[i][j] = best achievable score for current player from piles i..j</li>
  <li>Use max/min transitions depending on player choice</li>
</ul>

<pre><code class="language-java">
// Stone Game
boolean stoneGame(int[] piles) {
    int n = piles.length;
    int[][] dp = new int[n][n];
    for (int i = 0; i < n; i++) dp[i][i] = piles[i];
    for (int len = 2; len <= n; len++) {
        for (int i = 0; i + len - 1 < n; i++) {
            int j = i + len - 1;
            dp[i][j] = Math.max(piles[i] - dp[i+1][j], piles[j] - dp[i][j-1]);
        }
    }
    return dp[0][n-1] > 0;
}
</code></pre>

<p>📌 Problems:</p>
<ul>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/stone-game/" target="_blank">LC 877. Stone Game</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/predict-the-winner/" target="_blank">LC 486. Predict the Winner</a></li>
  <li><input type="checkbox"> <a href="https://leetcode.com/problems/stone-game-ii/" target="_blank">LC 1140. Stone Game II</a></li>
</ul>
`}
    ];

    const gridContainer = document.getElementById('algorithms-grid');
    const modal = document.getElementById('algorithm-modal');
    const modalContentPlaceholder = document.getElementById('modal-content-placeholder');
    const closeButton = document.querySelector('.close-button');

    // Code for creating the cards and adding event listeners
    algorithms.forEach(algo => {
        const card = document.createElement('a');
        card.href = `#${algo.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
        card.className = 'card';

        const cardImage = document.createElement('div');
        cardImage.className = 'card-image';
        cardImage.style.backgroundImage = `url('${algo.imageUrl}')`;

        const cardContent = document.createElement('div');
        cardContent.className = 'card-content';
        const h3 = document.createElement('h3');
        h3.textContent = algo.name;
        cardContent.appendChild(h3);

        card.appendChild(cardImage);
        card.appendChild(cardContent);

        card.addEventListener('click', (event) => {
            event.preventDefault();

            if (algo.content) {
                modalContentPlaceholder.innerHTML = algo.content;
                modal.style.display = 'flex';
                
                // There are no copy buttons, so we can remove this event listener logic
                document.querySelectorAll('pre code').forEach((block) => {
                    hljs.highlightElement(block);
                });
            }
        });

        gridContainer.appendChild(card);
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
        modalContentPlaceholder.innerHTML = '';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            modalContentPlaceholder.innerHTML = '';
        }
    });
});