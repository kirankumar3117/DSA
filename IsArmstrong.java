package dsaLearning.com;

public class IsArmstrong {
	public boolean isArmstrong(int n) {
		double sum=0;
		int original=n;
		while(n>0) {
			int temp=n%10;
			sum=sum + Math.pow(temp, 3);
			n=n/10;
		}
		return sum==original;
	}
}
