package dsaLearning.com;

public class FibBrut {
	public int fibBrut(int n) {
		int st=0;
		int ed=1;
		if(n==0 || n==1) return n;
		while(n>1) {
			int temp=ed;
			ed=st+ed;
			st=temp;
			n--;
		}
		return ed;
		
	}
}
