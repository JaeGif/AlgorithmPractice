
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
    // Best time to buy and sell stock 1
    /* 
    Input: prices = [7,1,5,3,6,4]
    Output: 5
    Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
    Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell. 

    */

    public int maxProfit(int[] prices) {
        // may buy and sell 1 time only.
        // track the biggest delta go across arr 1 time
        int profit = 0;
        int buyPoint = prices[0];

        for (int i = 0; i < prices.length; i++) {
            if (prices[i] < buyPoint) {
                buyPoint = prices[i];
            } if (prices[i] - buyPoint > profit) {
                profit = prices[i] - buyPoint;
            }
        }   
        return profit;
    }

    public static void main(String[] args) {
        int maxProfitRes;
        int[] prices = {7,1,5,3,6,4};
        Solutions solutions = new Solutions();

        maxProfitRes = solutions.maxProfit(prices);
        System.out.print(maxProfitRes);
    }
}
