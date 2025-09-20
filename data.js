const patterns = [
  {
    id: 1,
    title: 'Prefix Sum',
    description: '🔍 Prefix Sum Template Problems. Example: 1D Prefix Sum – Subarray Sum used to compute subarrays in O(1).',
    image: 'https://photos/prefixsumPhoto', // your image
    template: `Map<Integer, Integer> sumCount = new HashMap<>();
sumCount.put(0, 1);
int sum = 0, count = 0;

for (int num : nums) {
  sum += num;
  if (sumCount.containsKey(sum - k)) {
    count += sumCount.get(sum - k);
  }
  sumCount.put(sum, sumCount.getOrDefault(sum, 0) + 1);
}`
  },
  {
    id: 2,
    title: 'Two Pointers',
    description: 'Ideal for sorted arrays to find pairs/triplets with a certain sum.',
    image: 'https://source.unsplash.com/600x400/?arrows',
    template: `int left = 0, right = arr.length - 1;
while (left < right) {
  int sum = arr[left] + arr[right];
  if (sum == target) return new int[]{left, right};
  if (sum < target) left++;
  else right--;
}`
  }
];
