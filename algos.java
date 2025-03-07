import java.util.Arrays;

class Solutions {
    // return the 2 nums that add to target
    // slow method is 2x for looping

    public int[] twoSum(int[] nums, int target) {
        // if the input is sorted, only one pass
        int[] result = {0, 0};

        // go across the array
        for (int i = 0; i < nums.length; i++) {
        for (int j = i; j < nums.length; j++) {
            if (nums[i] + nums[j] == target && i != j) {
            result[0] = i;
            result[1] = j;
            break;
            }
        }
        }
    return result;
    }

    public static void main(String[] args) {
        int[] twoSumRes;
        int[] nums = {1, 2, 3, 4, 5};
        int target = 9;
        Solutions solutions = new Solutions();

        twoSumRes = solutions.twoSum(nums, target);
        System.out.print(Arrays.toString(twoSumRes));
    }
}