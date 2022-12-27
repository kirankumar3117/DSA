package dsaLearning.com;

public class ReverseNumber {
	
	public int reverse(int n) {
		int res=0;
		while(n>0) {
			int temp=n%10;
			if(res==0) res=res+temp;
			else res=res*10+temp;
			n=n/10;
		}
		return res;
	}

}
